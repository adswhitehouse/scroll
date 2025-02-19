// Variables
let header = document.querySelector("header");
let navAnchors = document.querySelectorAll(".jsNavAnchor");
let footerBtn = document.querySelector(".jsFooterBtn");
let hamburger = document.querySelector(".jsHamburger");
let navList = document.querySelector(".jsNavList");
let footerDate = document.querySelector(".jsFooterDate");
let navContainer = document.querySelector(".jsNavContainer");

// Creates a dynamic, interactive navigation
hamburger.addEventListener("mouseover", () => {
  hamburger.classList.add("hamburger-hover");
  let linksHeight = navList.getBoundingClientRect().height;
  navContainer.style.height = `${linksHeight}px`;
});
navList.addEventListener("mouseleave", () => {
  collapseNav();
});

function collapseNav() {
  hamburger.classList.remove("hamburger-hover");
  navContainer.style.height = "0";
}

// Scroll event listener that displays and hides scroll to top button and changes header styles
window.addEventListener("scroll", () => {
  scrollY > 500
    ? footerBtn.classList.add("footer-btn-active")
    : footerBtn.classList.remove("footer-btn-active");

  if (scrollY > 0 && window.innerWidth > 720) {
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
      window.scrollTo({ top: 0 });
      collapseNav();
    } else if (anchor.dataset.id === "about") {
      window.scrollTo({
        top: window.innerHeight - headerHeight,
      });
      collapseNav();
    } else if (anchor.dataset.id === "services") {
      window.scrollTo({
        top: window.innerHeight * 2 - headerHeight * 2,
      });
      collapseNav();
    } else {
      window.scrollTo({
        top: window.innerHeight * 3 - headerHeight * 3,
      });
      collapseNav();
    }
  });
});

// Scroll to top button
footerBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

// Dynamically updates the footer date
footerDate.innerHTML = new Date().getFullYear();
