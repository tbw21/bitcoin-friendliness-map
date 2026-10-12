// Score colours for the map: slate blue-grey for the hostile end, a pale blue-grey "mist" for
// neutral, and green for the friendly end. Listed for scores 1 (hostile) to 5 (very friendly).
// Checked for distinguishability under simulated protanopia, deuteranopia and tritanopia.
export const SCORE_COLORS: [string, string, string, string, string] = [
  "#374B68",
  "#587296",
  "#AFBDCE",
  "#C8EBAE",
  "#57B33E",
];

// Countries and territories without a score.
export const NO_DATA_COLOR = "#2C3138";

// Map background. Country borders use the same colour, so neighbouring countries are separated
// by a thin gap of background rather than a drawn line. Change it here and both follow.
export const MAP_BACKGROUND = "#000f1a";

/** CSS custom properties (--score-1 … --score-5, --no-data and --map-bg); set on a common ancestor. */
export function paletteVars(): Record<string, string> {
  const vars = Object.fromEntries(SCORE_COLORS.map((color, i) => [`--score-${i + 1}`, color]));
  vars["--map-bg"] = MAP_BACKGROUND;
  vars["--no-data"] = NO_DATA_COLOR;
  return vars;
}
