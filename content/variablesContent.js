export const variablesContent = `@use "sass:map";

/* ------------------- */
/* Start : THEME COLOR */
/* ------------------- */
$theme: (
  light: (
    primary: hsl(0, 0%, 100%),
    blackColor: hsl(0, 0%, 0%),
    whiteColor: hsl(0, 0%, 100%),
    blueColor: hsl(240, 100%, 50%),
  ),

  dark: (
    blackColor: hsl(0, 0%, 100%),
    whiteColor: hsl(0, 0%, 0%),
    blueColor: hsl(240, 100%, 50%),
  ),
);
/* ------------------- */
/* End   : THEME COLOR */
/* ------------------- */

/* --------------------- */
/* Start : PRIMARY THEME */
/* --------------------- */
@if map.has-key($theme, light) {
  :root {
    @each $name, $value in map.get($theme, light) {
      --#{$name}: #{$value};
    }
  }
} @else {
  @error "Theme 'light' not found in $theme map";
}

/* --------------------- */
/* End   : PRIMARY THEME */
/* --------------------- */

/* ------------------ */
/* Start : DARK THEME */
/* ------------------ */
@if map.has-key($theme, dark) {
  .dark {
    @each $name, $value in map.get($theme, dark) {
      --#{$name}: #{$value};
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      @each $name, $value in map.get($theme, dark) {
        --#{$name}: #{$value};
      }
    }
  }
} @else {
  @error "Theme 'dark' not found in $theme map";
}

/* ------------------ */
/* End   : DARK THEME */
/* ------------------ */

/* ------------------- */
/* Font sizes          */
/* ------------------- */
$fs-10: 10px;
$fs-11: 11px;
$fs-12: 12px;
$fs-13: 13px;
$fs-14: 14px;
$fs-15: 15px;
$fs-16: 16px;

/* ------------------- */
/* Font family         */
/* ------------------- */
$ff-serif: "Montserrat", sans-serif;

/* ------------------- */
/* Font weight         */
/* ------------------- */
$fw-400: 400;
$fw-500: 500;
$fw-600: 600;
$fw-700: 700;
$fw-800: 800;
$fw-900: 900;

/* ------------------- */
/* Z-index             */
/* ------------------- */
$z-index0: -1;
$z-index1: 1;
$z-index2: 2;
$z-index3: 3;
$z-index4: 4;
$z-index5: 5;

/* ------------------- */
/* Font Path           */
/* ------------------- */
$fonts-path: "../fonts" !default;

/* ------------------- */
/* Image Path          */
/* ------------------- */
$images-path: "../images" !default;

/* ------------------- */
/* Convert px to rem   */
/* ------------------- */
$base-rem: 16 !default;

`;
