'use strict';

// selecting elements

// FOR MENU WORKABLE IN MOBILE SCREEN
const menuBtn = document.querySelector('.menu-icon-mobile');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
  header.classList.toggle('open-nav');
});

// Smooth Scrolls with event delagation

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach((links) => {
  links.addEventListener('click', (e) => {
    e.preventDefault();
    const currentLink = links.getAttribute('href');
    if (currentLink === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    if (currentLink !== '#' && currentLink.startsWith('#')) {
      const sectionEL = document.querySelector(currentLink);
      sectionEL.scrollIntoView({
        behavior: 'smooth',
      });
    }
    // Close nav on mobile after clicking links
    if (header.classList.contains('open-nav')) {
      header.classList.toggle('open-nav');
    }
  });
});

// Fixed Navbar
const heroSection = document.querySelector('.hero');
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
observer.observe(heroSection);
