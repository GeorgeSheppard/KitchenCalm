import axios from "axios";
import { apiRequestDuration, apiRequestCount } from "./metrics";

let interceptorAdded = false;

function extractPath(url: string): string {
  try {
    return new URL(url).pathname;
  } catch {
    return url.split("?")[0];
  }
}

export function setupAxiosInstrumentation(): void {
  if (interceptorAdded) return;
  interceptorAdded = true;

  axios.interceptors.request.use((config) => {
    (config as any).__otelStart = performance.now();
    return config;
  });

  axios.interceptors.response.use(
    (response) => {
      const start: number | undefined = (response.config as any).__otelStart;
      if (start !== undefined) {
        const duration = performance.now() - start;
        const attrs = {
          "http.method": (response.config.method ?? "GET").toUpperCase(),
          "http.path": extractPath(response.config.url ?? ""),
          "http.status_code": response.status,
          "http.success": true,
        };
        apiRequestDuration.record(duration, attrs);
        apiRequestCount.add(1, attrs);
      }
      return response;
    },
    (error) => {
      const start: number | undefined = error.config?.__otelStart;
      if (start !== undefined) {
        const duration = performance.now() - start;
        const attrs = {
          "http.method": (error.config?.method ?? "GET").toUpperCase(),
          "http.path": extractPath(error.config?.url ?? ""),
          "http.status_code": error.response?.status ?? 0,
          "http.success": false,
        };
        apiRequestDuration.record(duration, attrs);
        apiRequestCount.add(1, attrs);
      }
      return Promise.reject(error);
    }
  );
}
