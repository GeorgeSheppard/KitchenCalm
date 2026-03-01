const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/**
 * Parse "Monday - 17/2/2026" to a Date object
 * @deprecated This function is no longer used with the new timestamp-based meal plan schema
 */
export function parseDateString(dateStr: string): Date {
  const parts = dateStr.split(" - ");
  if (parts.length < 2) return new Date();
  const [day, month, year] = parts[1].split("/").map(Number);
  return new Date(year, month - 1, day, 12, 0, 0);
}

/**
 * Convert "Monday - 17/2/2026" to "2026-02-17"
 * @deprecated This function is no longer used with the new timestamp-based meal plan schema
 */
export function dateStringToIso(dateStr: string): string {
  const date = parseDateString(dateStr);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/**
 * Convert "2026-02-17" to "Monday - 17/2/2026"
 * @deprecated This function is no longer used with the new timestamp-based meal plan schema
 */
export function isoToDateString(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d, 12, 0, 0);
  const weekday = WEEKDAYS[date.getDay()];
  return `${weekday} - ${String(d).padStart(2, "0")}/${String(m).padStart(2, "0")}/${y}`;
}
