const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const openNav = () => {
  nav.classList.add("is-open");
  document.body.classList.add("nav-open");
  navToggle.setAttribute("aria-label", "Закрыть меню");
};

const closeNav = () => {
  nav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-label", "Открыть меню");
};

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const forceTop = () => {
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  window.scrollTo(0, 0);
  updateHeader();
};

const resetStartPosition = () => {
  [0, 40, 120, 320, 800, 1400].forEach((delay) => {
    window.setTimeout(forceTop, delay);
  });
};

navToggle.addEventListener("click", () => {
  nav.classList.contains("is-open") ? closeNav() : openNav();
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

window.addEventListener("DOMContentLoaded", resetStartPosition);
window.addEventListener("load", resetStartPosition);
window.addEventListener("pageshow", resetStartPosition);
window.addEventListener("scroll", updateHeader, { passive: true });

resetStartPosition();
