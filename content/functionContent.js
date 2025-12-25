export const functionContent = `@use "utilities/variables" as *;
@use "sass:map";
@use "sass:math";

/* -------------------------- */
/* Start : Convert px to rem  */
/* -------------------------- */
@function strip-unit($num) {
  @return calc($num / ($num * 0 + 1));
}

@function rem($pixels) {
  @return calc(strip-unit($pixels) / $root-font-size) * 1rem;
}
/* -------------------------- */
/* End   : Convert px to rem  */
/* -------------------------- */

/* -------------------------- */
/* Start : Generate Font Size */
/* -------------------------- */
// Round to 4 decimal places for clean output
// === Rounding precision ===
  $rounding-precision: 10000; // For 4 decimal places: 1 / 0.0001 = 10000
                              // Change to 1000 for 3 decimals, 100000 for 5, etc.

@function round($n) {
  @return math.div(math.round($n * $rounding-precision), $rounding-precision);
}

/// fs(16, 32) → clamp(1rem, 0.7143rem + 1.4286vw, 2rem)
@function fs($min-px, $max-px) {
  // Convert to rem (assuming 16px = 1rem)
  $min-rem: math.div($min-px, $root-font-size) * 1rem;
  $max-rem: math.div($max-px, $root-font-size) * 1rem;

  // Slope in vw units
  $slope: math.div($max-px - $min-px, $max-viewport - $min-viewport) * 100;
  $slope-rounded: math.div(math.round($slope * $rounding-precision), $rounding-precision);

  // Intercept in rem
  $intercept-px: $min-px - math.div($max-px - $min-px, $max-viewport - $min-viewport) * $min-viewport;
  $intercept-rem: math.div($intercept-px, $root-font-size) * 1rem;
  $intercept-rounded: math.div(math.round($intercept-rem * $rounding-precision), $rounding-precision);

  // Output valid clamp: rem + vw (no invalid tricks)
  @return clamp(#{$min-rem}, #{$intercept-rounded} + #{$slope-rounded}vw, #{$max-rem});
}
/* ------------------------ */
/* End : Generate Font Size */
/* ------------------------ */

/* ----------------- */
/* Start : Use Color */
/* ----------------- */
@function getColor($key: "primary") {
  @if map.has-key(map.get($theme, light), $key) or map.has-key(map.get($theme, dark), $key) {
    @return var(--#{$key});
  }

  @else {
    @warn "COLOR '#{$key}' NOT FOUND IN THEME";
    @return null;
  }
}
/* ----------------- */
/* End   : Use Color */
/* ----------------- */`;
