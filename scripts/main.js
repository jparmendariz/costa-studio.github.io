/**
 * Costa Studio - Main JavaScript
 * JavaScript minimo para interacciones esenciales
 */

(function() {
  'use strict';

  // ==========================================================================
  // 1. Header Sticky - Cambio de estilo al scroll
  // ==========================================================================
  const header = document.querySelector('.header');
  const scrollThreshold = 50;

  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  // Passive listener para mejor performance
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Ejecutar al cargar por si la pagina inicia scrolleada
  handleScroll();

  // ==========================================================================
  // 2. Smooth Scroll - Para anclas internas
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');

      // Ignorar si es solo "#"
      if (targetId === '#') return;

      var target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();

        // Offset para el header sticky
        var headerHeight = header.offsetHeight;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================================================
  // 3. Animaciones de Entrada - Intersection Observer
  // ==========================================================================
  var observerOptions = {
    root: null,
    rootMargin: '-50px 0px',
    threshold: 0.15
  };

  var animationObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        animationObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Secciones con fade-in básico
  var sectionsToAnimate = document.querySelectorAll(
    '.filosofia, .cta-final'
  );

  sectionsToAnimate.forEach(function(section) {
    section.classList.add('animate-on-scroll');
    animationObserver.observe(section);
  });

  // Grids con animación escalonada (stagger)
  var staggerContainers = document.querySelectorAll(
    '.metodologia__grid, .valores__grid'
  );

  staggerContainers.forEach(function(container) {
    container.classList.add('stagger-children');
    animationObserver.observe(container);
  });

  // Títulos con animación individual
  var titlesToAnimate = document.querySelectorAll(
    '.metodologia__title, .metodologia__intro, .valores__title'
  );

  titlesToAnimate.forEach(function(title) {
    title.classList.add('animate-on-scroll');
    animationObserver.observe(title);
  });

  // ==========================================================================
  // 4. Prevencion de FOUC (Flash of Unstyled Content)
  // ==========================================================================
  document.documentElement.classList.add('js-loaded');

})();
