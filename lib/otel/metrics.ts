import { metrics } from "@opentelemetry/api";

const meter = metrics.getMeter("kitchencalm");

// Duration histogram for every axios API call.
// Attributes: http.method, http.path, http.status_code, http.success
export const apiRequestDuration = meter.createHistogram(
  "api.request.duration",
  {
    description: "Duration of API HTTP requests",
    unit: "ms",
  }
);

// Request counter complementing the histogram (useful for rate queries).
export const apiRequestCount = meter.createCounter("api.request.count", {
  description: "Total number of API HTTP requests made",
});

// Web Vitals + Next.js perf metrics reported via reportWebVitals.
// Attributes: web_vital.name (FCP, LCP, CLS, TTFB, FID, INP,
//   Next.js-hydration, Next.js-route-change-to-render, Next.js-render),
//   web_vital.label (web-vital | custom).
// Note: CLS value is a unitless score (0–1); all others are in ms.
export const webVitalHistogram = meter.createHistogram("web_vital", {
  description: "Web Vitals and Next.js performance metrics",
});
