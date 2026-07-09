const menuButton = document.querySelector("[data-menu-button]");
const siteNav = document.querySelector("[data-site-nav]");
const previewImage = document.querySelector("[data-feature-preview]");
const previewCaption = document.querySelector("[data-feature-caption]");
const featureCards = document.querySelectorAll("[data-feature]");
const toast = document.querySelector("[data-toast]");

const features = {
  "ai-video-generator": {
    image: "assets/1.png",
    alt: "AI Video Generator screenshot",
    caption: "AI Video Generator",
  },
  "image-to-video": {
    image: "assets/5.png",
    alt: "Image to Video screenshot",
    caption: "Image to Video",
  },
  "ai-replace": {
    image: "assets/4.png",
    alt: "AI Replace screenshot",
    caption: "AI Replace",
  },
  "ai-enhance": {
    image: "assets/6.png",
    alt: "AI Enhance screenshot",
    caption: "AI Enhance",
  },
};

menuButton?.addEventListener("click", () => {
  const nextState = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(nextState));
  siteNav?.classList.toggle("is-open", nextState);
});

siteNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuButton?.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  }
});

featureCards.forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.dataset.feature;
    const feature = key ? features[key] : undefined;
    if (!feature || !previewImage || !previewCaption) return;

    featureCards.forEach((item) => item.classList.remove("is-active"));
    card.classList.add("is-active");
    previewImage.src = feature.image;
    previewImage.alt = feature.alt;
    previewCaption.textContent = feature.caption;
  });
});

document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (!toast) return;

    toast.classList.add("is-visible");
    window.clearTimeout(window.__photomgiToastTimer);
    window.__photomgiToastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2400);
  });
});
