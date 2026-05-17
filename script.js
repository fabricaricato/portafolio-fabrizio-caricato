// Script for hide anchors while scrolling

const elementos = document.querySelectorAll('.anchor');
let isScrolling;

window.addEventListener('scroll', () => {
  elementos.forEach(i => i.classList.add('hide'));
  window.clearTimeout(isScrolling);

  isScrolling = setTimeout(() => {
    elementos.forEach(el => el.classList.remove('hide'));
  }, 200);
});

// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const downloadCv = document.querySelector('.download-cv');

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener('click', () => {
    const isActive = hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    if (downloadCv) {
      downloadCv.classList.toggle('active');
    }
    hamburgerBtn.setAttribute('aria-expanded', isActive);
  });

  // Close menu when a nav link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.classList.remove('active');
      navMenu.classList.remove('active');
      if (downloadCv) {
        downloadCv.classList.remove('active');
      }
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });
}