// src/utils/helpers.js

/**
 * Format hospital details nicely for display
 */
export function formatHospital(hospital) {
  return `${hospital.name} (${hospital.address || "Address not available"}) ⭐ ${hospital.rating}`;
}

/**
 * Handle safe JSON parse
 */
export function safeJSONParse(str, fallback = {}) {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}

/**
 * Delay function (for simulating loading or retries)
 */
export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Check if coordinates are valid
 */
export function isValidCoords(lat, lng) {
  return (
    typeof lat === "number" &&
    typeof lng === "number" &&
    !isNaN(lat) &&
    !isNaN(lng)
  );
}
