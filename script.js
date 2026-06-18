const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageSwitcher = languageToggle.closest(".language-switcher");
const langOptions = document.querySelectorAll("[data-lang-option]");
const workCards = document.querySelectorAll("[data-work-card]");
const lightbox = document.querySelector("[data-work-lightbox]");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxContent = document.querySelector("[data-work-lightbox-content]");
const imageViewer = document.querySelector("[data-image-viewer]");
const viewerImage = document.querySelector("[data-image-viewer-image]");
const imageCounter = document.querySelector("[data-image-counter]");
const imageCaption = document.querySelector("[data-image-caption]");
const imagePrev = document.querySelector("[data-image-prev]");
const imageNext = document.querySelector("[data-image-next]");

const translations = {
  ru: {
    meta: { description: "Портфолио Дарьи Городничей — графический дизайн, айдентика и контент." },
    language: { aria: "Переключение языка" },
    nav: { home: "На главную", works: "Работы", about: "Обо мне", services: "Форматы", contact: "Контакты", write: "Написать ↗", open: "Открыть меню", close: "Закрыть меню" },
    hero: { kicker: "Графический дизайнер / Владивосток", name: "Дарья", surname: "Городничая", lead: "Собираю визуальные миры для брендов, социальных сетей и идей, которым тесно в обычных рамках.", cta: "Смотреть\nпортфолио", alt: "Дарья Городничая", note: "Дизайн с характером,\nвниманием и щепоткой странности.", scroll: "листай вниз", orbit: "идеи • айдентика • истории •", label: "DASHVSVS\nПОРТФОЛИО ’26" },
    ticker: { text: "АЙДЕНТИКА ✦ СОЦИАЛЬНЫЕ СЕТИ ✦ КРЕАТИВНЫЙ ДИЗАЙН ✦ АЙДЕНТИКА ✦ СОЦИАЛЬНЫЕ СЕТИ ✦ КРЕАТИВНЫЙ ДИЗАЙН ✦" },
    works: { label: "избранное", title: "Работы, которые\nговорят сами", intro: "Три разных настроения. Один подход: найти точный образ и убрать всё лишнее.", one: "Stories\nпод ключ", two: "Айдентика\nбренда", three: "Посты\nпод ключ", oneTag: "Stories / арт-дирекшн", twoTag: "Айдентика / упаковка", threeTag: "Контент / кампания", open: "Открыть кейс ↗" },
    about: { label: "знакомство", title: "Красиво — это мало.\nНужно, чтобы цепляло.", p1: "Я Дарья, графический дизайнер. Люблю выразительную типографику, неожиданные детали и композиции, в которых есть воздух.", p2: "Каждый проект начинаю не с украшения, а с настроения и смысла. Так дизайн получается не просто аккуратным — он становится своим.", link: "Познакомиться ближе ↗", stamp: "ДИЗАЙН\nС ЖИВЫМ\nПУЛЬСОМ", hello: "привет!" },
    services: { label: "что я делаю", title: "Можно прийти\nс идеей. Или без.", oneTitle: "Айдентика", oneText: "Логотип, палитра, визуальные правила и цельный образ бренда.", twoTitle: "Мудборды", twoText: "Поиск стилистики, цвета и визуального направления проекта.", threeTitle: "Контент", threeText: "Посты, обложки и серии stories для социальных сетей." },
    feedback: { label: "живой отклик", title: "Отзывы не\nвыдумываю.\nПоказываю.", text: "Свежие проекты, отметки и реакции клиентов живут там, где происходит настоящее общение — в Instagram и Telegram.", diary: "ВИЗУАЛЬНЫЙ ДНЕВНИК", talk: "ДАВАЙТЕ ОБСУДИМ" },
    contact: { kicker: "Есть идея? Давайте дадим ей форму.", title: "Создадим что-то\nнеобычное?" },
    footer: { made: "Создано с вниманием —" },
    modal: { selected: "ИЗБРАННАЯ РАБОТА", preview: "ПРОСМОТР", close: "Закрыть кейс" },
    viewer: { title: "ПОЛНЫЙ ПРОСМОТР", close: "Закрыть изображение", prev: "Предыдущее изображение", next: "Следующее изображение" },
    alts: { nissanFront: "Дизайн сторис Nissan, вид спереди", nissanRear: "Дизайн карточки Nissan, вид сзади", nissanInterior: "Дизайн сторис об интерьере Nissan", greenPower: "Айдентика и упаковка Green Power", orangeStamp: "Оранжевый дизайн поста", orangeMagnifier: "Промо-пост с лупой", orangeGradient: "Оранжевая промо-карточка", creativePortrait: "Творческий портрет Дарьи" }
  },
  en: {
    meta: { description: "Portfolio of Darya Gorodnichaya — graphic design, identity and content." },
    language: { aria: "Language switcher" },
    nav: { home: "Back to top", works: "Works", about: "About", services: "Services", contact: "Contact", write: "Say hello ↗", open: "Open menu", close: "Close menu" },
    hero: { kicker: "Graphic designer / Vladivostok", name: "Darya", surname: "Gorodnichaya", lead: "I build visual worlds for brands, social media, and ideas that refuse to fit inside ordinary frames.", cta: "Explore\nportfolio", alt: "Darya Gorodnichaya", note: "Design with character,\ncare, and a pinch of weird.", scroll: "scroll down", orbit: "ideas • identity • stories •", label: "DASHVSVS\nPORTFOLIO ’26" },
    ticker: { text: "VISUAL IDENTITY ✦ SOCIAL MEDIA ✦ CREATIVE DESIGN ✦ VISUAL IDENTITY ✦ SOCIAL MEDIA ✦ CREATIVE DESIGN ✦" },
    works: { label: "selected", title: "Work that\nspeaks for itself", intro: "Three different moods. One approach: find the right image and remove everything unnecessary.", one: "Stories\nfull cycle", two: "Brand\nidentity", three: "Posts\nfull cycle", oneTag: "Stories / art direction", twoTag: "Identity / packaging", threeTag: "Content / campaign", open: "Open case ↗" },
    about: { label: "meet me", title: "Pretty is not enough.\nIt has to stick.", p1: "I’m Darya, a graphic designer. I love expressive typography, unexpected details, and compositions with room to breathe.", p2: "I start each project with mood and meaning, not decoration. That is how design becomes more than polished — it becomes personal.", link: "Get to know me ↗", stamp: "DESIGN\nWITH A\nPULSE", hello: "hello!" },
    services: { label: "what I do", title: "Bring an idea.\nOr come without one.", oneTitle: "Identity", oneText: "Logo, palette, visual rules and a cohesive brand image.", twoTitle: "Moodboards", twoText: "Finding the style, color and visual direction for a project.", threeTitle: "Content", threeText: "Posts, covers and story series for social media." },
    feedback: { label: "real feedback", title: "I don’t invent\nreviews.\nI show them.", text: "Fresh projects, tags, and client reactions live where real conversations happen — on Instagram and Telegram.", diary: "VISUAL DIARY", talk: "LET’S TALK" },
    contact: { kicker: "Have an idea? Let’s give it shape.", title: "Shall we make\nsomething unusual?" },
    footer: { made: "Made with care by" },
    modal: { selected: "SELECTED WORK", preview: "PREVIEW", close: "Close case" },
    viewer: { title: "FULL VIEW", close: "Close image", prev: "Previous image", next: "Next image" },
    alts: { nissanFront: "Nissan story design, front view", nissanRear: "Nissan specification card, rear view", nissanInterior: "Nissan interior story design", greenPower: "Green Power identity and packaging", orangeStamp: "Orange post design", orangeMagnifier: "Promotional post with magnifier", orangeGradient: "Orange promotional card", creativePortrait: "Creative portrait of Darya" }
  },
  zh: {
    meta: { description: "达莉娅·戈罗德尼恰娅作品集——平面设计、品牌识别与内容设计。" },
    language: { aria: "语言切换" },
    nav: { home: "返回顶部", works: "作品", about: "关于我", services: "服务", contact: "联系", write: "发消息 ↗", open: "打开菜单", close: "关闭菜单" },
    hero: { kicker: "平面设计师 / 符拉迪沃斯托克", name: "达莉娅", surname: "戈罗德尼恰娅", lead: "我为品牌、社交媒体，以及那些不愿困在普通框架里的想法，创造独特的视觉世界。", cta: "浏览\n作品集", alt: "达莉娅·戈罗德尼恰娅", note: "有性格、有温度，\n还有一点奇妙的设计。", scroll: "向下浏览", orbit: "创意 • 品牌 • 故事 •", label: "DASHVSVS\n作品集 ’26" },
    ticker: { text: "品牌识别 ✦ 社交媒体 ✦ 创意设计 ✦ 品牌识别 ✦ 社交媒体 ✦ 创意设计 ✦" },
    works: { label: "精选", title: "会自己说话的\n设计作品", intro: "三种不同的氛围，一种共同的方法：找到准确的视觉，去掉多余的一切。", one: "全套\n限时设计", two: "品牌\n视觉识别", three: "全套\n帖子设计", oneTag: "限时动态 / 艺术指导", twoTag: "品牌识别 / 包装", threeTag: "内容 / 推广活动", open: "查看案例 ↗" },
    about: { label: "认识我", title: "好看还不够。\n还要让人记住。", p1: "我是达莉娅，一名平面设计师。我喜欢富有表现力的字体、意外的小细节，以及会呼吸的构图。", p2: "每个项目，我都从氛围和意义开始，而不是装饰。这样，设计不仅精致，也真正属于你。", link: "进一步了解 ↗", stamp: "设计\n有鲜活的\n脉搏", hello: "你好！" },
    services: { label: "我的服务", title: "带着想法来。\n没有想法也可以。", oneTitle: "品牌识别", oneText: "标志、配色、视觉规范与完整的品牌形象。", twoTitle: "情绪板", twoText: "寻找项目的风格、色彩与视觉方向。", threeTitle: "内容设计", threeText: "社交媒体帖子、封面与限时动态系列。" },
    feedback: { label: "真实反馈", title: "不编造评价。\n只展示\n真实回应。", text: "最新项目、客户标记与真实反应，都在交流真正发生的地方——Instagram 和 Telegram。", diary: "视觉日记", talk: "和我聊聊" },
    contact: { kicker: "有想法吗？让我们一起赋予它形状。", title: "一起创造一点\n不寻常的东西？" },
    footer: { made: "用心制作：" },
    modal: { selected: "精选作品", preview: "预览", close: "关闭案例" },
    viewer: { title: "完整查看", close: "关闭图片", prev: "上一张图片", next: "下一张图片" },
    alts: { nissanFront: "日产汽车限时动态设计，前视图", nissanRear: "日产汽车参数卡，后视图", nissanInterior: "日产汽车内饰限时动态设计", greenPower: "Green Power 品牌识别与包装", orangeStamp: "橙色帖子设计", orangeMagnifier: "放大镜宣传帖子", orangeGradient: "橙色宣传卡片", creativePortrait: "达莉娅的创意肖像" }
  }
};

let currentLanguage = localStorage.getItem("dashvsvs-language") || "ru";
let activeViewerImages = [];
let activeViewerIndex = 0;

const getValue = (language, path) => path.split(".").reduce((value, key) => value?.[key], translations[language]);

const renderRichText = (element, value) => {
  const escaped = value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  element.innerHTML = escaped.replace(/\n/g, "<br>");
  if (["about.title", "feedback.title", "contact.title"].includes(element.dataset.i18n)) {
    const lines = element.innerHTML.split("<br>");
    const last = lines.pop();
    element.innerHTML = [...lines, `<em>${last}</em>`].join("<br>");
  }
};

const setLanguage = (language) => {
  currentLanguage = language;
  localStorage.setItem("dashvsvs-language", language);
  document.documentElement.lang = language;
  document.title = language === "ru" ? "Дарья Городничая — графический дизайнер" : language === "en" ? "Darya Gorodnichaya — Graphic Designer" : "达莉娅·戈罗德尼恰娅 — 平面设计师";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getValue(language, element.dataset.i18n);
    if (value) renderRichText(element, value);
  });
  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const value = getValue(language, element.dataset.i18nContent);
    if (value) element.content = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = getValue(language, element.dataset.i18nAlt);
    if (value) element.alt = value;
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = getValue(language, element.dataset.i18nAriaLabel);
    if (value) element.setAttribute("aria-label", value);
  });
  langOptions.forEach((button) => button.classList.toggle("is-active", button.dataset.lang === language));
  languageToggle.firstChild.textContent = `${language === "zh" ? "中文" : language.toUpperCase()} `;
  languageSwitcher.classList.remove("is-open");
  languageToggle.setAttribute("aria-expanded", "false");
};

const closeNav = () => {
  nav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-label", getValue(currentLanguage, "nav.open"));
};

navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", open);
  navToggle.setAttribute("aria-label", getValue(currentLanguage, open ? "nav.close" : "nav.open"));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));
languageToggle.addEventListener("click", () => {
  const open = languageSwitcher.classList.toggle("is-open");
  languageToggle.setAttribute("aria-expanded", String(open));
});
langOptions.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
document.addEventListener("click", (event) => {
  if (!languageSwitcher.contains(event.target)) languageSwitcher.classList.remove("is-open");
});
window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", scrollY > 20), { passive: true });

const collectImages = (container) => [...container.querySelectorAll("img")].map((image) => ({ src: image.currentSrc || image.src, alt: image.alt }));

const renderViewerImage = () => {
  const current = activeViewerImages[activeViewerIndex];
  viewerImage.src = current.src;
  viewerImage.alt = current.alt;
  imageCaption.textContent = current.alt;
  imageCounter.textContent = `${activeViewerIndex + 1} / ${activeViewerImages.length}`;
  const multiple = activeViewerImages.length > 1;
  imagePrev.hidden = !multiple;
  imageNext.hidden = !multiple;
};

const openImageViewer = (container, clickedImage) => {
  activeViewerImages = collectImages(container);
  activeViewerIndex = Math.max(0, [...container.querySelectorAll("img")].indexOf(clickedImage));
  renderViewerImage();
  imageViewer.hidden = false;
  document.body.classList.add("image-viewer-open");
};

const closeImageViewer = () => {
  imageViewer.hidden = true;
  viewerImage.src = "";
  activeViewerImages = [];
  document.body.classList.remove("image-viewer-open");
};

const changeViewerImage = (direction) => {
  activeViewerIndex = (activeViewerIndex + direction + activeViewerImages.length) % activeViewerImages.length;
  renderViewerImage();
};

const openLightbox = (card) => {
  const visual = card.querySelector(".project-visual");
  lightboxTitle.innerHTML = card.querySelector("h3").innerHTML;
  lightboxContent.innerHTML = "";
  lightboxContent.appendChild(visual.cloneNode(true));
  lightbox.hidden = false;
  document.body.classList.add("lightbox-open");
};

const closeLightbox = () => {
  lightbox.hidden = true;
  lightboxContent.innerHTML = "";
  document.body.classList.remove("lightbox-open");
};

workCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.matches(".project-visual img")) {
      event.stopPropagation();
      openImageViewer(card.querySelector(".project-visual"), event.target);
      return;
    }
    openLightbox(card);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(card);
    }
  });
});

lightboxContent.addEventListener("click", (event) => {
  if (event.target.matches("img")) openImageViewer(lightboxContent, event.target);
});
document.querySelectorAll("[data-work-lightbox-close]").forEach((button) => button.addEventListener("click", closeLightbox));
document.querySelectorAll("[data-image-viewer-close]").forEach((button) => button.addEventListener("click", closeImageViewer));
imagePrev.addEventListener("click", () => changeViewerImage(-1));
imageNext.addEventListener("click", () => changeViewerImage(1));

document.addEventListener("keydown", (event) => {
  if (!imageViewer.hidden && event.key === "ArrowLeft") changeViewerImage(-1);
  if (!imageViewer.hidden && event.key === "ArrowRight") changeViewerImage(1);
  if (event.key === "Escape") {
    if (!imageViewer.hidden) closeImageViewer();
    else if (!lightbox.hidden) closeLightbox();
    else closeNav();
  }
});

let touchStartX = 0;
imageViewer.addEventListener("touchstart", (event) => { touchStartX = event.changedTouches[0].screenX; }, { passive: true });
imageViewer.addEventListener("touchend", (event) => {
  const delta = event.changedTouches[0].screenX - touchStartX;
  if (Math.abs(delta) > 50 && activeViewerImages.length > 1) changeViewerImage(delta > 0 ? -1 : 1);
}, { passive: true });

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  }
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
setLanguage(currentLanguage);
