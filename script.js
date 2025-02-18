let header = document.querySelector("header");
let navAnchors = document.querySelectorAll(".jsNavAnchor");

window.addEventListener("scroll", () => {
  if (scrollY >= 25 && window.innerWidth > 720) {
    header.classList.add("header-scrolled");
    navAnchors.forEach((anchor) => {
      anchor.classList.add("a-scrolled");
    });
  } else {
    header.classList.remove("header-scrolled");
    navAnchors.forEach((anchor) => {
      anchor.classList.remove("a-scrolled");
    });
  }
});
