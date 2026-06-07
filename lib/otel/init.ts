import {
  WebTracerProvider,
  BatchSpanProcessor,
  ConsoleSpanExporter,
} from "@opentelemetry/sdk-trace-web";
import {
  MeterProvider,
  PeriodicExportingMetricReader,
  ConsoleMetricExporter,
} from "@opentelemetry/sdk-metrics";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-http";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { metrics } from "@opentelemetry/api";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { DocumentLoadInstrumentation } from "@opentelemetry/instrumentation-document-load";

let initialized = false;

export function initOtel(): void {
  if (typeof window === "undefined" || initialized) return;
  initialized = true;

  const resource = resourceFromAttributes({
    "service.name": "kitchencalm",
    "service.version": "1.0.0",
  });

  const otlpEndpoint = process.env.NEXT_PUBLIC_OTEL_ENDPOINT;

  // --- Tracing ---
  const spanProcessors = otlpEndpoint
    ? [
        new BatchSpanProcessor(
          new OTLPTraceExporter({ url: `${otlpEndpoint}/v1/traces` })
        ),
      ]
    : process.env.NODE_ENV === "development"
      ? [new BatchSpanProcessor(new ConsoleSpanExporter())]
      : [];

  const tracerProvider = new WebTracerProvider({ resource, spanProcessors });
  tracerProvider.register();

  // --- Metrics ---
  const metricReaders = otlpEndpoint
    ? [
        new PeriodicExportingMetricReader({
          exporter: new OTLPMetricExporter({
            url: `${otlpEndpoint}/v1/metrics`,
          }),
          exportIntervalMillis: 30_000,
        }),
      ]
    : process.env.NODE_ENV === "development"
      ? [
          new PeriodicExportingMetricReader({
            exporter: new ConsoleMetricExporter(),
            exportIntervalMillis: 30_000,
          }),
        ]
      : [];

  const meterProvider = new MeterProvider({ resource, readers: metricReaders });
  metrics.setGlobalMeterProvider(meterProvider);

  // Auto-instrument initial document load (captures DNS, TCP, TTFB, DOM timings)
  registerInstrumentations({
    tracerProvider,
    instrumentations: [new DocumentLoadInstrumentation()],
  });
}
