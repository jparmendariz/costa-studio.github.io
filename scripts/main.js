/**
 * Costa Studio - Main JavaScript v2.0
 * Premium interactions and animations
 */

(function() {
  'use strict';

  // ==========================================================================
  // Loading Screen
  // ==========================================================================
  const loader = document.getElementById('loader');

  function hideLoader() {
    if (loader) {
      loader.classList.add('hidden');
      document.body.classList.add('loaded');
    }
  }

  // Hide loader after videos start loading or after timeout
  window.addEventListener('load', function() {
    setTimeout(hideLoader, 1800);
  });

  // Fallback in case load event doesn't fire
  setTimeout(hideLoader, 3000);

  // ==========================================================================
  // Header Scroll Effect
  // ==========================================================================
  const header = document.querySelector('.header');
  let lastScroll = 0;

  function handleHeaderScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }

    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });

  // ==========================================================================
  // Mobile Menu
  // ==========================================================================
  const hamburger = document.querySelector('.header__hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link, .mobile-menu__cta');

  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.toggle('is-open');
    hamburger.classList.toggle('is-active');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', toggleMobileMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });
  }

  // ==========================================================================
  // Smooth Scroll for Anchor Links
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================================================
  // Scroll-Triggered Animations
  // ==========================================================================
  const animatedElements = document.querySelectorAll('[data-animate]');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Get delay from data attribute if present
        const delay = entry.target.dataset.delay || 0;

        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, parseFloat(delay) * 1000);

        // Unobserve after animation triggers
        animationObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    animationObserver.observe(el);
  });

  // ==========================================================================
  // Counter Animation for Stats
  // ==========================================================================
  const counters = document.querySelectorAll('[data-count]');

  function animateCounter(element, target) {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * easeOut);

      element.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target.toLocaleString();
      }
    }

    requestAnimationFrame(updateCounter);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.count, 10);
        animateCounter(entry.target, target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  // ==========================================================================
  // Video Lazy Loading
  // ==========================================================================
  const lazyVideos = document.querySelectorAll('[data-lazy-video]');

  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        video.play().catch(() => {
          // Video autoplay might be blocked, that's okay
        });
        videoObserver.unobserve(video);
      }
    });
  }, { rootMargin: '200px' });

  lazyVideos.forEach(video => {
    video.pause();
    videoObserver.observe(video);
  });

  // ==========================================================================
  // Parallax Effect for Videos
  // ==========================================================================
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  function updateParallax() {
    parallaxElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const scrollPercent = (rect.top + rect.height) / (window.innerHeight + rect.height);
      const parallaxOffset = (scrollPercent - 0.5) * 50;

      element.style.transform = `translateY(${parallaxOffset}px)`;
    });
  }

  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', updateParallax, { passive: true });
    updateParallax();
  }

  // ==========================================================================
  // Hero Title Animation Enhancement
  // ==========================================================================
  const heroTitle = document.querySelector('[data-animate="split-text"]');

  if (heroTitle) {
    // Trigger animation after loader is hidden
    setTimeout(() => {
      heroTitle.classList.add('is-visible');
    }, 2000);
  }

  // ==========================================================================
  // Button Magnetic Effect (Desktop only)
  // ==========================================================================
  if (window.matchMedia('(min-width: 1024px)').matches) {
    const magneticButtons = document.querySelectorAll('.btn-primary--large');

    magneticButtons.forEach(button => {
      button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });

      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
      });
    });
  }

  // ==========================================================================
  // Reveal on Scroll - Stagger Children
  // ==========================================================================
  const staggerContainers = document.querySelectorAll('.servicios__grid, .valores__grid, .metodologia__compass');

  staggerContainers.forEach(container => {
    const children = container.children;

    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          Array.from(children).forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('is-visible');
            }, index * 150);
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    staggerObserver.observe(container);
  });

  // ==========================================================================
  // Portfolio Hover Effect
  // ==========================================================================
  const proyectos = document.querySelectorAll('.proyecto');

  proyectos.forEach(proyecto => {
    proyecto.addEventListener('mouseenter', function() {
      this.style.zIndex = '10';
    });

    proyecto.addEventListener('mouseleave', function() {
      this.style.zIndex = '1';
    });
  });

  // ==========================================================================
  // Service Cards - Icon Animation
  // ==========================================================================
  const servicios = document.querySelectorAll('.servicio');

  servicios.forEach(servicio => {
    const icon = servicio.querySelector('.servicio__icon svg');

    if (icon) {
      servicio.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        icon.style.transition = 'transform 0.4s ease';
      });

      servicio.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1) rotate(0deg)';
      });
    }
  });

  // ==========================================================================
  // Valor Cards - Icon Animation
  // ==========================================================================
  const valores = document.querySelectorAll('.valor');

  valores.forEach(valor => {
    const icon = valor.querySelector('.valor__icon svg');

    if (icon) {
      valor.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.15)';
        icon.style.transition = 'transform 0.4s ease';
      });

      valor.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
      });
    }
  });

  // ==========================================================================
  // Scroll Progress Indicator
  // ==========================================================================
  function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, #4169E1, #3457C9);
      z-index: 10001;
      transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    }, { passive: true });
  }

  createScrollProgress();

  // ==========================================================================
  // Prevent FOUC (Flash of Unstyled Content)
  // ==========================================================================
  document.documentElement.classList.add('js-loaded');

  // ==========================================================================
  // Console Welcome Message
  // ==========================================================================
  console.log(
    '%c Costa Studio ',
    'background: #4169E1; color: white; padding: 10px 20px; font-size: 16px; font-weight: bold;'
  );
  console.log(
    '%c Donde las ideas tocan tierra ',
    'color: #0A0A0A; font-size: 12px; font-style: italic;'
  );

})();
