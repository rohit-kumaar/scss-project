export const layoutContent = `/* ------------------------- */
/* Start : Classic Container */
/* ------------------------- */
// .container {
//   max-width: 1200px;
//   width: 100%;
//   padding-inline: 15px;
//   margin-inline: auto;
// }
/* ------------------------- */
/* End   : Classic Container */
/* ------------------------- */

/* ------------------------ */
/* Start : Modern Container */
/* ------------------------ */
.container {
  --content: 1200px;
  --mw: 100%;
  --px: calc(15px * 2);
  width: min(var(--mw) - var(--px), var(--content));
  margin-inline: auto;
}
/* ------------------------ */
/* End   : Modern Container */
/* ------------------------ */

/* -------------------- */
/* Start : Layout Setup */
/* -------------------- */
// Website :- https://ryanmulligan.dev/blog/layout-breakouts/
.grid-container {
  --width: 1200px;
  --px: 15px;

  display: grid;
  grid-template-columns:
    [full-width-start] minmax(var(--px), 1fr)
    [container-start]
    min(100% - (var(--px) * 2), var(--width))
    [container-end]
    minmax(var(--px), 1fr) [full-width-end];

  > * {
    grid-column: container;
  }

  > .full-width {
    grid-column: full-width;
  }
}

/* -------------------- */
/* End   : Layout Setup */
/* -------------------- */

/* ------------------------------- */
/* Start : Responsive Grid Wrapper */
/* ------------------------------- */
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  gap: 20px;
}
/* ------------------------------- */
/* End   : Responsive Grid Wrapper */
/* ------------------------------- */`;
