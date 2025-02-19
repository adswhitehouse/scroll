// Variables
let header = document.querySelector("header");
let navAnchors = document.querySelectorAll(".jsNavAnchor");
let footerBtn = document.querySelector(".jsFooterBtn");
let hamburger = document.querySelector(".jsHamburger");
let navList = document.querySelector(".jsNavList");
let footerDate = document.querySelector(".jsFooterDate")

// Creates an interactive navigation on
hamburger.addEventListener("mouseover", () => {
  navList.classList.add("nav-list-active");
});
navList.addEventListener("mouseleave", () => {
  navList.classList.remove("nav-list-active");
});

// Scroll event listener that displays and hides scroll to top button and changes header styles
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

// Height of page header used for calculations
let headerHeight = 79.96;

// Creates click event listener for each navigation anchor and scrolls to the appropriate section
navAnchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
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
  });
});

// Scroll to top button
footerBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dynamically updates the footer date
footerDate.innerHTML = new Date().getFullYear()