export const variablesContent = `@use "sass:map";

$theme: (
  light: (
    primaryColor: #ffffff,
    blackColor: #000000,
    whiteColor: #ffffff,
    blueColor: #6b6bfe,
    whiteColor10P: rgba(255, 255, 255, 10%),
    whiteColor20P: rgba(255, 255, 255, 20%),
    whiteColor30P: rgba(255, 255, 255, 30%),
    whiteColor40P: rgba(255, 255, 255, 40%),
    whiteColor50P: rgba(255, 255, 255, 50%),
    whiteColor60P: rgba(255, 255, 255, 60%),
    whiteColor70P: rgba(255, 255, 255, 70%),
    whiteColor80P: rgba(255, 255, 255, 80%),
    whiteColor90P: rgba(255, 255, 255, 90%),
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
  @error "THEME 'light' NOT FOUND IN $theme map";
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
  @error "THEME 'dark' NOT FOUND IN $theme map";
}

/* ------------------ */
/* End   : DARK THEME */
/* ------------------ */
$ff-serif: "Montserrat", sans-serif;
$fonts-path: "../fonts" !default;
$images-path: "../images" !default;
$root-font-size: 16 !default;
$min-viewport: 320;
$max-viewport: 1440;`;
