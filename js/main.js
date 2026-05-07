/* ========================================
   NUOVA EUROTAR - MAIN JAVASCRIPT
   ======================================== */

// ========== HEADER SCROLL EFFECT ==========
const header = document.querySelector('header');
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ========== MOBILE MENU TOGGLE ==========
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.site-nav');

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    // Rotate the menu icon
    mobileMenuBtn.style.transform = mobileNav.classList.contains('active')
      ? 'rotate(90deg)'
      : 'rotate(0deg)';
  });

  // Close menu when a link is clicked
  const navLinks = mobileNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      mobileMenuBtn.style.transform = 'rotate(0deg)';
    });
  });
}

// ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fadeInUp');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards and sections
const animatableElements = document.querySelectorAll(
  '.card, .feature, .section, .btn'
);
animatableElements.forEach(el => {
  observer.observe(el);
});

// ========== SMOOTH SCROLL TO ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========== FORM HANDLING ==========
function initializeForm(formSelector) {
  const form = document.querySelector(formSelector);
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Simple validation
    if (!data.email || !data.message) {
      alert('Per favore, completa tutti i campi richiesti.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert('Inserisci un indirizzo email valido.');
      return;
    }

    // Submit handler (in a real app, this would send to a server)
    console.log('Form submitted:', data);
    alert('Grazie! Abbiamo ricevuto il tuo messaggio. Ti contatteremo presto.');
    form.reset();
  });
}

// ========== PAGE INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  initializeForm('form');
  console.log('Nuova Eurotar Website Loaded ✓');
});
