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

const scrollToTopOnFreshOpen = () => {
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    updateHeader();
  });
};

navToggle.addEventListener("click", () => {
  nav.classList.contains("is-open") ? closeNav() : openNav();
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

window.addEventListener("load", scrollToTopOnFreshOpen);
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    scrollToTopOnFreshOpen();
  }
});
window.addEventListener("scroll", updateHeader, { passive: true });

updateHeader();
