let header = document.querySelector("header");
let navAnchors = document.querySelectorAll(".jsNavAnchor");
let footerBtn = document.querySelector(".jsFooterBtn");

window.addEventListener("scroll", () => {
  scrollY > 500
    ? footerBtn.classList.add("footer-btn-active")
    : footerBtn.classList.remove("footer-btn-active");

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

let headerHeight = 79.96;

navAnchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    if (window.innerWidth > 720) {
      if (anchor.dataset.id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (anchor.dataset.id === "about") {
        window.scrollTo({
          top: window.innerHeight - headerHeight,
          behavior: "smooth",
        });
      } else if (anchor.dataset.id === "services") {
        window.scrollTo({
          top: window.innerHeight * 2 - headerHeight * 2,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: window.innerHeight * 3 - headerHeight * 3,
          behavior: "smooth",
        });
      }
    } else {
      if (anchor.dataset.id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (anchor.dataset.id === "about") {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      } else if (anchor.dataset.id === "services") {
        window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" });
      } else {
        window.scrollTo({ top: window.innerHeight * 3, behavior: "smooth" });
      }
    }
  });
});

footerBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
