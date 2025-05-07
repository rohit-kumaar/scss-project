export const functionContent = `// Convert px to rem Start
@function strip-unit($num) {
  @return calc($num / ($num * 0 + 1));
}

@function rem($pixels) {
  @return calc(strip-unit($pixels) / $base-rem) * 1rem;
}

// Convert px to rem End


/* -------------------------- */
/* Start : Generate Font Size */
/* -------------------------- */
// https://utopia.fyi/type/calculator/

$screen-min-width: 320;
$screen-max-width: 1440;
$screen-vw: 100vw;
$fluid-bp: calc(($screen-vw - $screen-min-width / 16 * 1rem) / ($screen-max-width - $screen-min-width));

@function fs($fs-min, $fs-max) {
  @return calc((($fs-min / 16) * 1rem) + ($fs-max - $fs-min) * $fluid-bp);
}

/* ------------------------ */
/* End : Generate Font Size */
/* ------------------------ */`;
