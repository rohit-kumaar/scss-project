export const variablesContent = `@use "sass:map";

/* ------------------- */
/* Start : THEME COLOR */
/* ------------------- */
$theme: (
  light: (
    primaryColor: rgb(255, 255, 255),
    blackColor: rgb(0, 0, 0),
    whiteColor: rgb(255, 255, 255),
    blueColor: hsl(240, 100%, 50%),
    blackColor10P: rgba(0, 0, 0, 0.1),
    blackColor20P: rgba(0, 0, 0, 0.2),
    blackColor30P: rgba(0, 0, 0, 0.3),
    blackColor40P: rgba(0, 0, 0, 0.4),
    blackColor50P: rgba(0, 0, 0, 0.5),
    blackColor60P: rgba(0, 0, 0, 0.6),
    blackColor70P: rgba(0, 0, 0, 0.7),
    blackColor80P: rgba(0, 0, 0, 0.8),
    blackColor90P: rgba(0, 0, 0, 0.9),
    whiteColor10P: rgba(255, 255, 255, 0.1),
    whiteColor20P: rgba(255, 255, 255, 0.2),
    whiteColor30P: rgba(255, 255, 255, 0.3),
    whiteColor40P: rgba(255, 255, 255, 0.4),
    whiteColor50P: rgba(255, 255, 255, 0.5),
    whiteColor60P: rgba(255, 255, 255, 0.6),
    whiteColor70P: rgba(255, 255, 255, 0.7),
    whiteColor80P: rgba(255, 255, 255, 0.8),
    whiteColor90P: rgba(255, 255, 255, 0.9),
  ),

  dark: (
    primaryColor: rgb(230, 173, 83),
    blackColor: rgb(255, 255, 255),
    whiteColor: rgb(0, 0, 0),
    blueColor: rgb(0, 0, 255),
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
