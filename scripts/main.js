/**
 * Costa Studio - Main JavaScript v2.0
 * Premium interactions and animations
 */

(function() {
  'use strict';

  // ==========================================================================
  // Translations System
  // ==========================================================================
  const translations = {
    es: {
      // Navigation
      'nav.purpose': 'Propósito',
      'nav.services': 'Servicios',
      'nav.methodology': 'Metodología',
      'nav.portfolio': 'Portafolio',
      'nav.cta': 'Agendar llamada',

      // Hero
      'hero.badge': 'Influencer Marketing Data-Driven',
      'hero.title1': 'Donde las ideas',
      'hero.title2': 'tocan tierra',
      'hero.subtitle': 'Guiamos a las marcas en la creación de relaciones auténticas que generan valor real.',
      'hero.cta1': 'Agendar llamada',
      'hero.cta2': 'Conocer más',

      // Purpose
      'purpose.label': 'Nuestro Propósito',
      'purpose.title': 'Guiar a las marcas en la creación de relaciones auténticas que generen un valor real',
      'purpose.text': 'Construimos puentes duraderos que conectan marcas con personas. No somos una fábrica de campañas. Somos un estudio donde cada colaboración se trata como una obra, no como producción en serie.',
      'purpose.stat1': 'Creadores verificados',
      'purpose.stat3': 'Comunicación en tiempo real',

      // Services
      'services.label': 'Lo que hacemos',
      'services.title': 'Servicios',
      'services.intro': 'Combinamos creatividad con datos para campañas que impactan.',
      'services.s1.title': 'Influencer Marketing',
      'services.s1.desc': 'Campañas estratégicas con creadores verificados. Tracking en tiempo real y métricas que importan: CPV, CPE, engagement rate desagregado.',
      'services.s1.tag1': 'Estrategia',
      'services.s1.tag2': 'Ejecución',
      'services.s1.tag3': 'Medición',
      'services.s2.badge': 'Tecnología propietaria',
      'services.s2.title': 'Dashboard de Métricas',
      'services.s2.desc': 'Monitoreo en tiempo real de todas tus campañas. Transparencia total que nadie más ofrece. Data insights únicos en la industria.',
      'services.s3.title': 'Consultoría Creativa',
      'services.s3.desc': 'Estrategia de marca con rigor de consultoría. Entendemos tendencias culturales para crear conexiones genuinas con tu audiencia.',
      'services.s3.tag1': 'Estrategia',
      'services.s3.tag2': 'Cultura',
      'services.s3.tag3': 'Tendencias',

      // Methodology
      'methodology.label': 'Nuestra metodología',
      'methodology.title': 'La Brújula Costa',
      'methodology.intro': 'Cuatro pilares que guían cada proyecto hacia resultados extraordinarios.',
      'methodology.p1.title': 'Cartografía',
      'methodology.p1.desc': 'Mapeamos 3,000+ influencers con tecnología avanzada. Cada perfil verificado por audiencia, engagement y afinidad.',
      'methodology.p2.title': 'Estrategia',
      'methodology.p2.desc': 'Diseñamos campañas con rigor de consultoría. Objetivos claros, KPIs medibles, creatividad con propósito.',
      'methodology.p3.title': 'Ejecución Lean',
      'methodology.p3.desc': 'Implementamos con agilidad y optimización constante. Sin burocracia, con resultados de primera línea.',
      'methodology.p4.title': 'Comunicación 24/7',
      'methodology.p4.desc': 'Acceso en tiempo real al estado de tu campaña. Respuestas cualquier día, cualquier hora.',

      // Values
      'values.label': 'Por qué elegirnos',
      'values.title': 'Nuestros Valores',
      'values.v1.title': 'Craftmanship',
      'values.v1.desc': 'Cada campaña tratada como obra, no producción en serie. Menos proyectos, clientes más felices. Elevamos el potencial humano a través de creatividad y maestría.',
      'values.v2.title': 'Data + Estrategia',
      'values.v2.desc': 'Rigor de consultoría combinado con tecnología propietaria. Redefinimos y elevamos el estándar de la industria con decisiones basadas en datos reales.',
      'values.v3.title': 'Cultura Amplificada',
      'values.v3.desc': 'Leemos, entendemos y amplificamos la cultura. Sensibilidad a corrientes culturales que nos permite crear conexiones genuinas y relevantes.',

      // Portfolio
      'portfolio.label': 'Nuestro trabajo',
      'portfolio.title': 'Portafolio',
      'portfolio.intro': 'Campañas que conectan marcas con audiencias de manera auténtica.',
      'portfolio.tbb.category': 'Influencer Marketing',
      'portfolio.tbb.desc': 'Colaboración con influencer de alto impacto para posicionamiento de marca y awareness.',
      'portfolio.tbb.views': 'Visualizaciones',
      'portfolio.tbb.time': 'Tiempo',
      'portfolio.coming': 'Próximamente',
      'portfolio.consulting': 'Consultoría',
      'portfolio.cta.text': 'Resultados que hablan por sí mismos.',
      'portfolio.cta.btn': 'Escribe tu historia de éxito',

      // CTA
      'cta.badge': 'Comienza tu viaje',
      'cta.title': 'Impulsa tu marca<br>con nosotros',
      'cta.subtitle': 'Conversación de 30 minutos. Sin compromiso. Solo claridad sobre cómo podemos ayudarte.',
      'cta.btn': 'Agendar llamada',
      'cta.or': 'O escríbenos directamente a',

      // Footer
      'footer.tagline': 'Donde las ideas tocan tierra',
      'footer.nav': 'Navegación',
      'footer.contact': 'Contacto',
      'footer.social': 'Redes',
      'footer.copy': '2025 Costa Studio. Ciudad de México.',
      'footer.credits': 'Craftmanship sobre volumen.'
    },
    en: {
      // Navigation
      'nav.purpose': 'Purpose',
      'nav.services': 'Services',
      'nav.methodology': 'Methodology',
      'nav.portfolio': 'Portfolio',
      'nav.cta': 'Book a call',

      // Hero
      'hero.badge': 'Data-Driven Influencer Marketing',
      'hero.title1': 'Where ideas',
      'hero.title2': 'touch ground',
      'hero.subtitle': 'We guide brands in creating authentic relationships that generate real value.',
      'hero.cta1': 'Book a call',
      'hero.cta2': 'Learn more',

      // Purpose
      'purpose.label': 'Our Purpose',
      'purpose.title': 'Guide brands in creating authentic relationships that generate real value',
      'purpose.text': 'We build lasting bridges that connect brands with people. We are not a campaign factory. We are a studio where each collaboration is treated as a work of art, not mass production.',
      'purpose.stat1': 'Verified creators',
      'purpose.stat3': 'Real-time communication',

      // Services
      'services.label': 'What we do',
      'services.title': 'Services',
      'services.intro': 'We combine creativity with data for campaigns that make an impact.',
      'services.s1.title': 'Influencer Marketing',
      'services.s1.desc': 'Strategic campaigns with verified creators. Real-time tracking and metrics that matter: CPV, CPE, disaggregated engagement rate.',
      'services.s1.tag1': 'Strategy',
      'services.s1.tag2': 'Execution',
      'services.s1.tag3': 'Measurement',
      'services.s2.badge': 'Proprietary technology',
      'services.s2.title': 'Metrics Dashboard',
      'services.s2.desc': 'Real-time monitoring of all your campaigns. Total transparency that no one else offers. Unique data insights in the industry.',
      'services.s3.title': 'Creative Consulting',
      'services.s3.desc': 'Brand strategy with consulting rigor. We understand cultural trends to create genuine connections with your audience.',
      'services.s3.tag1': 'Strategy',
      'services.s3.tag2': 'Culture',
      'services.s3.tag3': 'Trends',

      // Methodology
      'methodology.label': 'Our methodology',
      'methodology.title': 'The Costa Compass',
      'methodology.intro': 'Four pillars that guide each project towards extraordinary results.',
      'methodology.p1.title': 'Mapping',
      'methodology.p1.desc': 'We map 3,000+ influencers with advanced technology. Each profile verified by audience, engagement and affinity.',
      'methodology.p2.title': 'Strategy',
      'methodology.p2.desc': 'We design campaigns with consulting rigor. Clear objectives, measurable KPIs, creativity with purpose.',
      'methodology.p3.title': 'Lean Execution',
      'methodology.p3.desc': 'We implement with agility and constant optimization. No bureaucracy, with top-tier results.',
      'methodology.p4.title': '24/7 Communication',
      'methodology.p4.desc': 'Real-time access to your campaign status. Responses any day, any time.',

      // Values
      'values.label': 'Why choose us',
      'values.title': 'Our Values',
      'values.v1.title': 'Craftmanship',
      'values.v1.desc': 'Each campaign treated as a work of art, not mass production. Fewer projects, happier clients. We elevate human potential through creativity and mastery.',
      'values.v2.title': 'Data + Strategy',
      'values.v2.desc': 'Consulting rigor combined with proprietary technology. We redefine and elevate industry standards with decisions based on real data.',
      'values.v3.title': 'Amplified Culture',
      'values.v3.desc': 'We read, understand and amplify culture. Sensitivity to cultural currents that allows us to create genuine and relevant connections.',

      // Portfolio
      'portfolio.label': 'Our work',
      'portfolio.title': 'Portfolio',
      'portfolio.intro': 'Campaigns that authentically connect brands with audiences.',
      'portfolio.tbb.category': 'Influencer Marketing',
      'portfolio.tbb.desc': 'High-impact influencer collaboration for brand positioning and awareness.',
      'portfolio.tbb.views': 'Views',
      'portfolio.tbb.time': 'Time',
      'portfolio.coming': 'Coming soon',
      'portfolio.consulting': 'Consulting',
      'portfolio.cta.text': 'Results that speak for themselves.',
      'portfolio.cta.btn': 'Write your success story',

      // CTA
      'cta.badge': 'Start your journey',
      'cta.title': 'Boost your brand<br>with us',
      'cta.subtitle': '30-minute conversation. No commitment. Just clarity on how we can help you.',
      'cta.btn': 'Book a call',
      'cta.or': 'Or write to us directly at',

      // Footer
      'footer.tagline': 'Where ideas touch ground',
      'footer.nav': 'Navigation',
      'footer.contact': 'Contact',
      'footer.social': 'Social',
      'footer.copy': '2025 Costa Studio. Mexico City.',
      'footer.credits': 'Craftmanship over volume.'
    }
  };

  let currentLang = localStorage.getItem('costa-lang') || 'es';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('costa-lang', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update language toggle buttons
    document.querySelectorAll('.lang-toggle__current').forEach(el => {
      el.textContent = lang.toUpperCase();
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }

  function toggleLanguage() {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
  }

  // Initialize language on page load
  document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    setLanguage(currentLang);

    // Add click handlers to language toggles
    const langToggles = document.querySelectorAll('.lang-toggle');
    langToggles.forEach(toggle => {
      toggle.addEventListener('click', toggleLanguage);
    });
  });

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
