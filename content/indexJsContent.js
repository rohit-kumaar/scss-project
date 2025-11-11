export const indexJsContent = `console.log("JS file working!");
import "../js/jquery/jquery.min.js";
import "../js/owl_carousel/owl.carousel.min.js";
import "../js/bootstrap/bootstrap.bundle.min.js";

/* This is a function that is listening for the DOM to be ready. */
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

const initApp = () => {};`;
