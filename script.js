/* ============================================
   Fabrizio Caricato — Portfolio
   Theme toggle, typewriter, scroll reveals,
   certificates modal, mobile menu.
   ============================================ */

(() => {
  'use strict';

  /* ----- Helpers ----- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ============================================
     1. THEME TOGGLE
     ============================================ */
  const STORAGE_KEY = 'portfolio-theme';
  const root = document.documentElement;
  const themeToggle = $('#theme-toggle');
  const themeIcon = themeToggle?.querySelector('.theme-toggle-thumb i');

  const setThemeIcon = (theme) => {
    if (!themeIcon) return;
    themeIcon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  };

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    if (themeToggle) {
      themeToggle.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
      );
    }
    setThemeIcon(theme);
  };

  const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
  const stored = localStorage.getItem(STORAGE_KEY);
  applyTheme(stored || (prefersLight ? 'light' : 'dark'));

  themeToggle?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  /* ============================================
     2. FOOTER YEAR
     ============================================ */
  const yearEl = $('#footer-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ============================================
     3. TYPEWRITER
     ============================================ */
  const typewriterEl = $('#typewriter');
  if (typewriterEl) {
    const roles = [
      'Full Stack Developer',
      'React Engineer',
      'Node.js Builder',
      'TypeScript Advocate',
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;

    const TYPE_DELAY = 80;
    const DELETE_DELAY = 40;
    const HOLD_DELAY = 1800;

    const tick = () => {
      const current = roles[roleIdx];

      if (!deleting) {
        charIdx++;
        typewriterEl.textContent = current.slice(0, charIdx);
        if (charIdx === current.length) {
          deleting = true;
          setTimeout(tick, HOLD_DELAY);
          return;
        }
        setTimeout(tick, TYPE_DELAY);
      } else {
        charIdx--;
        typewriterEl.textContent = current.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
        }
        setTimeout(tick, DELETE_DELAY);
      }
    };

    setTimeout(tick, 600);
  }

  /* ============================================
     4. SCROLL REVEAL (IntersectionObserver)
     ============================================ */
  const revealEls = $$('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ============================================
     5. HAMBURGER MENU
     ============================================ */
  const hamburger = $('#hamburger-btn');
  const navMenu = $('#nav-menu');
  const cvBtn = $('.btn-cv');

  const closeMenu = () => {
    hamburger?.classList.remove('is-active');
    navMenu?.classList.remove('is-open');
    cvBtn?.classList.remove('is-open');
    hamburger?.setAttribute('aria-expanded', 'false');
  };

  hamburger?.addEventListener('click', () => {
    const willOpen = !hamburger.classList.contains('is-active');
    hamburger.classList.toggle('is-active', willOpen);
    navMenu?.classList.toggle('is-open', willOpen);
    cvBtn?.classList.toggle('is-open', willOpen);
    hamburger.setAttribute('aria-expanded', String(willOpen));
  });

  $$('.nav-link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  /* ============================================
     6. SCROLL CUE HIDE
     ============================================ */
  const scrollCue = $('.scroll-cue');
  if (scrollCue) {
    let scrollTimer;
    window.addEventListener(
      'scroll',
      () => {
        scrollCue.classList.add('is-hidden');
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          if (window.scrollY < 80) scrollCue.classList.remove('is-hidden');
        }, 250);
      },
      { passive: true }
    );
  }

  /* ============================================
     7. CERTIFICATES MODAL
     ============================================ */
  const modal = $('#certificates-modal');
  const openers = $$('[data-open-certificates]');
  const closers = $$('[data-close-modal]', modal || document);
  const tabs = $$('.modal-tab', modal || document);
  const figures = $$('.cert-figure', modal || document);

  const openModal = () => {
    if (!modal) return;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    const firstTab = tabs[0];
    firstTab?.focus();
  };

  const closeModal = () => {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  };

  const activateTab = (idx) => {
    tabs.forEach((t, i) => {
      const active = i === idx;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', String(active));
    });
    figures.forEach((f, i) => {
      f.classList.toggle('is-active', i === idx);
      f.hidden = i !== idx;
    });
  };

  openers.forEach((btn) => btn.addEventListener('click', openModal));
  closers.forEach((btn) => btn.addEventListener('click', closeModal));
  tabs.forEach((tab, i) => tab.addEventListener('click', () => activateTab(i)));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.hidden) closeModal();
  });

  /* ============================================
     8. SMOOTH ANCHOR SCROLL OFFSET
     (scroll-padding-top in CSS handles the offset,
      this just makes sure the URL hash updates
      without a jarring jump on some browsers)
     ============================================ */
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', id);
    });
  });
})();
