const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const langSwitcher = document.querySelector("[data-lang-toggle]")?.closest(".language-switcher");
const langToggle = document.querySelector("[data-lang-toggle]");
const langMenu = document.querySelector("[data-lang-menu]");
const langCurrent = document.querySelector("[data-lang-current]");
const langOptions = document.querySelectorAll("[data-lang-option]");

const translations = {
  ru: {
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
      eyebrow: "Client notes",
      title: "Отзывы, которые звучат как продолжение визуального стиля.",
      intro: "Небольшая подборка теплых впечатлений от клиентов, чтобы сайт чувствовался живым, а не просто красивым.",
      featured: {
        tag: "Brand identity",
        quote: "«Дарья очень тонко чувствует настроение бренда. После работы с ней визуал стал цельным, узнаваемым и действительно “моим”.»",
        author: "Анна, personal brand project",
        meta: "Айдентика и визуальное направление"
      },
      second: {
        tag: "Social media",
        quote: "«Макеты для соцсетей получились аккуратными и очень современными. Все выглядит легко, но при этом профессионально и уверенно.»",
        author: "Мария, beauty studio",
        meta: "Контент и визуальная подача"
      },
      third: {
        tag: "Creative support",
        quote: "«Было очень спокойно работать вместе: Дарья внимательно слушает, предлагает уместные решения и доводит идею до красивого результата.»",
        author: "Екатерина, boutique project",
        meta: "Концепция и графический стиль"
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
      right: "Made by W1ZZYDEV"
    }
  },
  en: {
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
      eyebrow: "Client notes",
      title: "Reviews that feel like an extension of the visual language.",
      intro: "A small selection of warm impressions from clients, helping the website feel alive instead of simply polished.",
      featured: {
        tag: "Brand identity",
        quote: "\"Darya has a subtle sense of brand mood. After working with her, the visual style became cohesive, recognizable, and truly mine.\"",
        author: "Anna, personal brand project",
        meta: "Identity and visual direction"
      },
      second: {
        tag: "Social media",
        quote: "\"The social media layouts turned out elegant and modern. Everything feels light, but still professional and confident.\"",
        author: "Maria, beauty studio",
        meta: "Content and visual presentation"
      },
      third: {
        tag: "Creative support",
        quote: "\"It felt calm and easy to work together: Darya listens carefully, suggests the right ideas, and brings them to a beautiful result.\"",
        author: "Ekaterina, boutique project",
        meta: "Concept and graphic style"
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
      right: "Made by W1ZZYDEV"
    }
  },
  zh: {
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
      eyebrow: "Client notes",
      title: "这些评价像是网站视觉语言的延伸。",
      intro: "几段温柔而真实的客户反馈，让页面不只是好看，也更有温度。",
      featured: {
        tag: "Brand identity",
        quote: "“达莉娅对品牌气质的感受非常细腻。合作之后，整个视觉系统变得统一、清晰，而且真正属于我。”",
        author: "Anna，个人品牌项目",
        meta: "品牌识别与视觉方向"
      },
      second: {
        tag: "Social media",
        quote: "“社交媒体版式很精致，也很现代。整体感觉轻盈，但依旧专业而有力量。”",
        author: "Maria，美业工作室",
        meta: "内容设计与视觉呈现"
      },
      third: {
        tag: "Creative support",
        quote: "“一起合作的过程很安心：达莉娅会认真倾听，提出合适的想法，并把它们落实成真正漂亮的结果。”",
        author: "Ekaterina，精品项目",
        meta: "概念与图形风格"
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
      right: "Made by W1ZZYDEV"
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

const setDocumentLanguage = (language) => {
  document.documentElement.lang = language;
  langCurrent.textContent = language === "zh" ? "中文" : language.toUpperCase();

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

const toggleLanguageMenu = () => {
  langSwitcher?.classList.toggle("is-open");
};

const closeLanguageMenu = () => {
  langSwitcher?.classList.remove("is-open");
};

let currentLanguage = window.localStorage.getItem("dashvsvs-language") || "ru";

navToggle.addEventListener("click", () => {
  nav.classList.contains("is-open") ? closeNav() : openNav();
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

langToggle?.addEventListener("click", () => {
  toggleLanguageMenu();
});

langOptions.forEach((option) => {
  option.addEventListener("click", () => {
    persistLanguage(option.dataset.lang);
    closeLanguageMenu();
  });
});

document.addEventListener("click", (event) => {
  if (langSwitcher && !langSwitcher.contains(event.target)) {
    closeLanguageMenu();
  }
});

window.addEventListener("DOMContentLoaded", resetStartPosition);
window.addEventListener("load", resetStartPosition);
window.addEventListener("pageshow", resetStartPosition);
window.addEventListener("scroll", updateHeader, { passive: true });

setDocumentLanguage(currentLanguage);
resetStartPosition();
