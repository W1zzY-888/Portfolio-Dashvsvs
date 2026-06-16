const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const workCards = document.querySelectorAll("[data-work-card]");
const workLightbox = document.querySelector("[data-work-lightbox]");
const workLightboxTitle = document.querySelector("#work-lightbox-title");
const workLightboxContent = document.querySelector("[data-work-lightbox-content]");
const workLightboxClosers = document.querySelectorAll("[data-work-lightbox-close]");

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

const openWorkLightbox = (card) => {
  const title = card.querySelector("h3")?.textContent?.trim() || "Просмотр работы";
  const media = card.querySelector(".work-collage, .work-media-frame");

  if (!workLightbox || !workLightboxTitle || !workLightboxContent || !media) {
    return;
  }

  workLightboxTitle.textContent = title;
  workLightboxContent.innerHTML = "";
  workLightboxContent.appendChild(media.cloneNode(true));
  workLightbox.hidden = false;
  document.body.classList.add("lightbox-open");
};

const closeWorkLightbox = () => {
  if (!workLightbox || !workLightboxContent) {
    return;
  }

  workLightbox.hidden = true;
  workLightboxContent.innerHTML = "";
  document.body.classList.remove("lightbox-open");
};

navToggle.addEventListener("click", () => {
  nav.classList.contains("is-open") ? closeNav() : openNav();
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

workCards.forEach((card) => {
  card.addEventListener("click", () => openWorkLightbox(card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openWorkLightbox(card);
    }
  });
});

workLightboxClosers.forEach((element) => {
  element.addEventListener("click", closeWorkLightbox);
});

window.addEventListener("DOMContentLoaded", resetStartPosition);
window.addEventListener("load", resetStartPosition);
window.addEventListener("pageshow", resetStartPosition);
window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeWorkLightbox();
  }
});

resetStartPosition();
