export const variablesContent = `@use "sass:map";

$theme: (
  light: (
    primaryColor: #ffffff,
    blackColor: #000000,
    whiteColor: #ffffff,
    blueColor: #6b6bfe,
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
    primaryColor: #e6ad53,
    blackColor: #ffffff,
    whiteColor: #000000,
    blueColor: #0000ff,
  ),
);

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
$ff-serif: "Montserrat", sans-serif;
$fonts-path: "../fonts" !default;
$images-path: "../images" !default;
$base-rem: 16 !default;`;