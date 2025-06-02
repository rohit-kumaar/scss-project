export const functionContent = `@use "utilities/variables" as *;

/* ----------------------------*/
/* Start : Convert px to rem   */
/* ----------------------------*/
@function strip-unit($num) {
  @return calc($num / ($num * 0 + 1));
}

@function rem($pixels) {
  @return calc(strip-unit($pixels) / $base-rem) * 1rem;
}
// 👉 font-size: rem(10); JUST WRITE
/* ----------------------------*/
/* End   : Convert px to rem   */
/* ----------------------------*/

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

@function fs($fs-min, $fs-max) {
  @return calc((($fs-min / 16) * 1rem) + ($fs-max - $fs-min) * $fluid-bp);
}
// 👉  RESPONSIVE FONT font-size: fs(16,32); 
/* ------------------------ */
/* End : Generate Font Size */
/* ------------------------ */
`;
