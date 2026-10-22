const menuButton = document.querySelector('[data-menu-button]');
const siteNav = document.querySelector('[data-site-nav]');

menuButton?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const showcase = {
  style: ['assets/cartoon.png', 'Cartoon portrait example in Piclume', 'PICLUME / EXPERIMENT 01'],
  cutout: ['assets/cutout.png', 'Background cutout example in Piclume', 'PICLUME / EXPERIMENT 02'],
  chat: ['assets/chat.png', 'Chat photo editing example in Piclume', 'PICLUME / EXPERIMENT 03']
};

document.querySelectorAll('.showcase-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.showcase-tab').forEach((item) => {
      item.classList.remove('is-active');
      item.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');
    const [src, alt, caption] = showcase[tab.dataset.shot];
    const image = document.querySelector('[data-showcase-image]');
    image.src = src;
    image.alt = alt;
    document.querySelector('.canvas-caption').textContent = caption;
  });
});

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});
