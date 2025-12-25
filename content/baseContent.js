export const baseContent = `@use "utilities/variables" as *;
@use "utilities/function" as *;

html {
  box-sizing: border-box;
  font-size: 16px;
  color-scheme: light dark;
  scroll-behavior: smooth;
  scroll-padding-top: 0;
}

body {
  color: getColor(blackColor);
  background: getColor(whiteColor);
  font-family: "Montserrat", sans-serif;
  font-size: rem($root-font-size);
  font-weight: 400;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul,
figure,
blockquote {
  padding: 0;
  margin: 0;
  font-weight: 400;
}

img,
picture,
svg {
  max-width: 100%;
  width: auto;
  height: auto;
}`;
