const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const workCards = document.querySelectorAll("[data-work-card]");
const workLightbox = document.querySelector("[data-work-lightbox]");
const workLightboxTitle = document.querySelector("#work-lightbox-title");
const workLightboxContent = document.querySelector("[data-work-lightbox-content]");
const workLightboxClosers = document.querySelectorAll("[data-work-lightbox-close]");
const langOptions = document.querySelectorAll("[data-lang-option]");

const translations = {
  ru: {
    language: {
      label: "Язык"
    },
    meta: {
      title: "Дарья Городничая | Графический дизайнер",
      description: "Портфолио Дарьи Городничей: графический дизайн, визуальная айдентика, композиция и оформление брендов."
    },
    brand: {
      name: "Дарья Городничая",
      ariaLabel: "Дарья Городничая"
    },
    nav: {
      works: "Работы",
      about: "О Дарье",
      services: "Форматы",
      reviews: "Отзывы",
      contact: "Контакты",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню"
    },
    hero: {
      ariaLabel: "Первый экран портфолио",
      eyebrow: "Graphic design portfolio",
      title: "Дарья Городничая",
      lead: "Я Дарья Городничая, графический дизайнер. Создаю визуальные решения для брендов, социальных сетей и проектов, где важны стиль, аккуратная композиция и запоминающееся настроение.",
      primaryCta: "Смотреть работы",
      secondaryCta: "Связаться",
      portraitAria: "Портрет Дарьи",
      portraitAlt: "Дарья Городничая"
    },
    intro: {
      eyebrow: "Creative direction",
      title: "Портфолио для визуальных проектов, айдентики и личного бренда.",
      statOne: "готовых работ",
      statTwo: "основных направления",
      statThree: "обновленный сайт"
    },
    works: {
      eyebrow: "Selected works",
      title: "Избранные работы",
      cardOne: {
        tag: "Identity",
        title: "Визуальная айдентика",
        text: "Нежная и цельная графическая система с продуманной палитрой, типографикой и узнаваемым настроением."
      },
      cardTwo: {
        tag: "Brand mood",
        title: "Личный стиль",
        text: "Подбор референсов, цветовой палитры и визуального направления."
      },
      cardThree: {
        tag: "Content",
        title: "Серия постов",
        text: "Минималистичные макеты и обложки для социальных сетей."
      }
    },
    about: {
      eyebrow: "About",
      title: "Дарья создает визуальные истории, в которых есть характер, воздух и мягкая сила.",
      text: "Здесь можно показать биографию, любимые направления, опыт, сильные стороны и то, как Дарья подходит к каждому проекту. Когда будут финальные данные, этот блок легко наполнить живым личным текстом.",
      link: "Обсудить проект"
    },
    services: {
      eyebrow: "Formats",
      title: "Что можно показать на сайте",
      cardOne: {
        title: "Айдентика",
        text: "Логотипы, палитры, визуальные правила и аккуратная графическая система."
      },
      cardTwo: {
        title: "Дизайн и мудборды",
        text: "Цветовые решения, визуальные концепции, оформление личного бренда."
      },
      cardThree: {
        title: "Контент",
        text: "Обложки, посты, истории, мини-серии для социальных сетей."
      }
    },
    reviews: {
      eyebrow: "Real feedback",
      title: "Реальные отзывы о работе Даши живут в ее Instagram и Telegram.",
      intro: "Вместо выдуманных цитат здесь собраны аккуратные переходы туда, где Даше действительно пишут клиенты, отмечают проекты и оставляют обратную связь.",
      featured: {
        tag: "Real responses",
        quote: "Настоящие отзывы, реакции и впечатления клиентов лучше читать там, где они появляются вживую.",
        author: "@dashvsvs",
        meta: "Instagram stories, direct и Telegram-диалоги"
      },
      second: {
        tag: "Instagram",
        quote: "Посмотреть живые отметки, сторис, публикации и визуальные отклики на проекты Дарьи.",
        author: "@dashvsvs",
        meta: "Профиль с актуальными публикациями",
        link: "Открыть Instagram"
      },
      third: {
        tag: "Telegram",
        quote: "Написать Даше напрямую, запросить кейсы, уточнить детали проекта или попросить показать свежую обратную связь.",
        author: "@dashvsvs",
        meta: "Личный контакт для общения",
        link: "Открыть Telegram"
      }
    },
    contact: {
      eyebrow: "Contact",
      title: "Связаться с Дарьей",
      text: "Почта, Telegram и Instagram Дарьи для связи и обсуждения новых проектов.",
      telegram: "Telegram",
      instagram: "Instagram"
    },
    footer: {
      left: "Дарья Городничая portfolio",
      right: "Made by"
    }
  },
  en: {
    language: {
      label: "Language"
    },
    meta: {
      title: "Darya Gorodnichaya | Graphic Designer",
      description: "Portfolio of Darya Gorodnichaya: graphic design, visual identity, composition, and brand styling."
    },
    brand: {
      name: "Darya Gorodnichaya",
      ariaLabel: "Darya Gorodnichaya"
    },
    nav: {
      works: "Works",
      about: "About",
      services: "Formats",
      reviews: "Reviews",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu"
    },
    hero: {
      ariaLabel: "Portfolio hero section",
      eyebrow: "Graphic design portfolio",
      title: "Darya Gorodnichaya",
      lead: "I am Darya Gorodnichaya, a graphic designer. I create visual solutions for brands, social media, and projects where style, careful composition, and a memorable mood matter.",
      primaryCta: "View projects",
      secondaryCta: "Get in touch",
      portraitAria: "Darya portrait",
      portraitAlt: "Darya Gorodnichaya"
    },
    intro: {
      eyebrow: "Creative direction",
      title: "A portfolio for visual projects, brand identity, and personal branding.",
      statOne: "completed works",
      statTwo: "core directions",
      statThree: "refreshed website"
    },
    works: {
      eyebrow: "Selected works",
      title: "Selected works",
      cardOne: {
        tag: "Identity",
        title: "Visual identity",
        text: "A soft and cohesive graphic system with a thoughtful palette, typography, and a memorable mood."
      },
      cardTwo: {
        tag: "Brand mood",
        title: "Personal style",
        text: "Curated references, color palette, and a clear visual direction."
      },
      cardThree: {
        tag: "Content",
        title: "Post series",
        text: "Minimal layouts and covers for social media."
      }
    },
    about: {
      eyebrow: "About",
      title: "Darya creates visual stories with character, air, and a gentle sense of strength.",
      text: "This section can tell her story, favorite directions, experience, strengths, and how she approaches each project. When the final details arrive, it can easily become a more personal introduction.",
      link: "Discuss a project"
    },
    services: {
      eyebrow: "Formats",
      title: "What this website can showcase",
      cardOne: {
        title: "Identity",
        text: "Logos, palettes, visual rules, and a polished graphic system."
      },
      cardTwo: {
        title: "Design and moodboards",
        text: "Color concepts, visual directions, and personal brand styling."
      },
      cardThree: {
        title: "Content",
        text: "Covers, posts, stories, and mini-series for social media."
      }
    },
    reviews: {
      eyebrow: "Real feedback",
      title: "Real feedback about Darya's work lives in her Instagram and Telegram.",
      intro: "Instead of invented quotes, this section sends visitors to the places where clients actually message Darya, tag projects, and leave responses.",
      featured: {
        tag: "Real responses",
        quote: "The best way to read real reactions, messages, and impressions is directly where they appear.",
        author: "@dashvsvs",
        meta: "Instagram stories, direct messages, and Telegram chats"
      },
      second: {
        tag: "Instagram",
        quote: "See live tags, stories, posts, and visual feedback around Darya's projects.",
        author: "@dashvsvs",
        meta: "Profile with current publications",
        link: "Open Instagram"
      },
      third: {
        tag: "Telegram",
        quote: "Write to Darya directly, ask for project details, request case studies, or ask to see recent feedback.",
        author: "@dashvsvs",
        meta: "Direct contact for communication",
        link: "Open Telegram"
      }
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact Darya",
      text: "Darya's email, Telegram, and Instagram for inquiries and new projects.",
      telegram: "Telegram",
      instagram: "Instagram"
    },
    footer: {
      left: "Darya Gorodnichaya portfolio",
      right: "Made by"
    }
  },
  zh: {
    language: {
      label: "语言"
    },
    meta: {
      title: "达莉娅·戈罗德尼恰娅 | 平面设计师",
      description: "达莉娅·戈罗德尼恰娅作品集：平面设计、视觉识别、品牌构图与审美呈现。"
    },
    brand: {
      name: "达莉娅·戈罗德尼恰娅",
      ariaLabel: "达莉娅·戈罗德尼恰娅"
    },
    nav: {
      works: "作品",
      about: "关于她",
      services: "方向",
      reviews: "评价",
      contact: "联系",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单"
    },
    hero: {
      ariaLabel: "作品集首页主视觉",
      eyebrow: "Graphic design portfolio",
      title: "达莉娅·戈罗德尼恰娅",
      lead: "我是达莉娅·戈罗德尼恰娅，一名平面设计师。我为品牌、社交媒体和个人项目打造视觉方案，让风格、构图与氛围同时成立。",
      primaryCta: "查看作品",
      secondaryCta: "联系我",
      portraitAria: "达莉娅肖像",
      portraitAlt: "达莉娅·戈罗德尼恰娅"
    },
    intro: {
      eyebrow: "Creative direction",
      title: "一个适合视觉项目、品牌识别与个人品牌展示的作品集。",
      statOne: "已完成项目",
      statTwo: "主要方向",
      statThree: "更新后的站点"
    },
    works: {
      eyebrow: "Selected works",
      title: "精选作品",
      cardOne: {
        tag: "Identity",
        title: "视觉识别",
        text: "柔和而完整的视觉系统，拥有经过推敲的配色、字体与辨识度。"
      },
      cardTwo: {
        tag: "Brand mood",
        title: "个人风格",
        text: "从参考方向、色彩体系到整体视觉基调的梳理。"
      },
      cardThree: {
        tag: "Content",
        title: "内容系列",
        text: "适用于社交媒体的极简版式与封面设计。"
      }
    },
    about: {
      eyebrow: "About",
      title: "达莉娅打造的视觉故事，总带着性格、留白与柔和的力量。",
      text: "这里可以放她的经历、偏好的设计方向、经验与优势，以及她如何进入每一个项目。等最终资料到位后，这一段也可以写得更个人化。",
      link: "聊聊项目"
    },
    services: {
      eyebrow: "Formats",
      title: "网站可以展示的内容",
      cardOne: {
        title: "品牌识别",
        text: "标志、配色、视觉规范与完整而克制的图形系统。"
      },
      cardTwo: {
        title: "设计与情绪板",
        text: "色彩概念、视觉方向与个人品牌包装。"
      },
      cardThree: {
        title: "内容设计",
        text: "封面、帖子、故事与社交媒体系列内容。"
      }
    },
    reviews: {
      eyebrow: "Real feedback",
      title: "关于达莉娅工作的真实反馈，都在她的 Instagram 和 Telegram 里。",
      intro: "这里不再放虚构评价，而是直接引导访客去看客户真正留言、标记作品和给出反馈的地方。",
      featured: {
        tag: "Real responses",
        quote: "最真实的评价、反馈和交流，最好直接去它们真正发生的地方阅读。",
        author: "@dashvsvs",
        meta: "Instagram 限时、私信与 Telegram 对话"
      },
      second: {
        tag: "Instagram",
        quote: "查看真实的标记、限时动态、发布内容，以及围绕达莉娅项目产生的视觉反馈。",
        author: "@dashvsvs",
        meta: "持续更新的个人主页",
        link: "打开 Instagram"
      },
      third: {
        tag: "Telegram",
        quote: "直接给达莉娅发消息，询问项目、案例，或者请她展示最新的真实反馈。",
        author: "@dashvsvs",
        meta: "直接沟通入口",
        link: "打开 Telegram"
      }
    },
    contact: {
      eyebrow: "Contact",
      title: "联系达莉娅",
      text: "这里有达莉娅的邮箱、Telegram 和 Instagram，方便沟通新项目。",
      telegram: "Telegram",
      instagram: "Instagram"
    },
    footer: {
      left: "达莉娅·戈罗德尼恰娅 portfolio",
      right: "Made by"
    }
  }
};

const getTranslation = (language, path) =>
  path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), translations[language]);

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const openNav = () => {
  nav.classList.add("is-open");
  document.body.classList.add("nav-open");
  navToggle.setAttribute("aria-label", getTranslation(currentLanguage, "nav.closeMenu"));
};

const closeNav = () => {
  nav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-label", getTranslation(currentLanguage, "nav.openMenu"));
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

const setDocumentLanguage = (language) => {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslation(language, element.dataset.i18n);

    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = getTranslation(language, element.dataset.i18nAlt);

    if (value) {
      element.setAttribute("alt", value);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = getTranslation(language, element.dataset.i18nAriaLabel);

    if (value) {
      element.setAttribute("aria-label", value);
    }
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const value = getTranslation(language, element.dataset.i18nContent);

    if (value) {
      element.setAttribute("content", value);
    }
  });

  document.querySelectorAll("[data-i18n-document-title]").forEach((element) => {
    const value = getTranslation(language, element.dataset.i18nDocumentTitle);

    if (value) {
      document.title = value;
      element.textContent = value;
    }
  });

  langOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.lang === language);
  });

  navToggle.setAttribute("aria-label", getTranslation(language, nav.classList.contains("is-open") ? "nav.closeMenu" : "nav.openMenu"));
};

const persistLanguage = (language) => {
  currentLanguage = language;
  window.localStorage.setItem("dashvsvs-language", language);
  setDocumentLanguage(language);
};

let currentLanguage = window.localStorage.getItem("dashvsvs-language") || "ru";

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

langOptions.forEach((option) => {
  option.addEventListener("click", () => {
    persistLanguage(option.dataset.lang);
  });
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

setDocumentLanguage(currentLanguage);
resetStartPosition();
