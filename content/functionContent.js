export const functionContent = `@use "utilities/variables" as *;
@use "sass:map";

/* -------------------------- */
/* Start : Convert px to rem  */
/* -------------------------- */
@function strip-unit($num) {
  @return calc($num / ($num * 0 + 1));
}

@function rem($pixels) {
  @return calc(strip-unit($pixels) / $base-rem) * 1rem;
}
/* -------------------------- */
/* End   : Convert px to rem  */
/* -------------------------- */

/* -------------------------- */
/* Start : Generate Font Size */
/* -------------------------- */
// https://utopia.fyi/type/calculator/
$screen-min-width: 320;
$screen-max-width: 1440;
$screen-vw: 100vw;
$fluid-bp: calc(
  ($screen-vw - $screen-min-width / 16 * 1rem) /
    ($screen-max-width - $screen-min-width)
);

@function fs($fs-min: 16, $fs-max: 16) {
  @return calc((($fs-min / 16) * 1rem) + ($fs-max - $fs-min) * $fluid-bp);
}
/* ------------------------ */
/* End : Generate Font Size */
/* ------------------------ */

/* ----------------- */
/* Start : Use Color */
/* ----------------- */
@function getColor($key: "primary") {
  @if map.has-key(map.get($theme, light), $key) or
    map.has-key(map.get($theme, dark), $key)
  {
    @return var(--#{$key});
  } @else {
    @warn "Color '#{$key}' not found in theme";
    @return null;
  }
}
/* ----------------- */
/* End   : Use Color */
/* ----------------- */`;