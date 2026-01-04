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
      'nav.about': 'Nosotros',
      'nav.newsletter': 'Newsletter',
      'nav.cta': 'Agendar llamada',

      // Hero
      'hero.badge': 'Influencer Marketing Data-Driven',
      'hero.title1': 'Donde las ideas',
      'hero.title2': 'tocan tierra',
      'hero.subtitle': 'Estrategias de influencer marketing que convierten alcance en ROI medible.',
      'hero.cta1': 'Agendar llamada',
      'hero.cta2': 'Conocer más',

      // Purpose
      'purpose.label': 'Qué hacemos',
      'purpose.title': 'Conectamos marcas con creadores para campañas que generan resultados',
      'purpose.text': 'Somos una agencia de influencer marketing. Diseñamos y ejecutamos campañas con una base propietaria de 3,000+ creadores verificados. Cada colaboración se trata como una obra, no como producción en serie.',
      'purpose.stat1': 'Creadores verificados',
      'purpose.stat3': 'Comunicación en tiempo real',

      // Services
      'services.label': 'Cómo lo hacemos',
      'services.title': 'Servicios',
      'services.intro': 'Desde la estrategia hasta la medición de resultados, manejamos todo el proceso de tu campaña con influencers.',
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
      'methodology.label': 'Nuestro proceso',
      'methodology.title': 'La Brújula Costa',
      'methodology.intro': 'Así trabajamos cada campaña de influencer marketing, desde la selección de creadores hasta la medición de resultados.',
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
      'portfolio.intro': 'Campañas de influencer marketing con resultados medibles.',
      'portfolio.tbb.category': 'Influencer Marketing',
      'portfolio.tbb.desc': 'Colaboración con influencer de alto impacto para posicionamiento de marca y awareness.',
      'portfolio.tbb.views': 'Visualizaciones',
      'portfolio.tbb.time': 'Tiempo',
      'portfolio.coming': 'Próximamente',
      'portfolio.consulting': 'Consultoría',
      'portfolio.cta.text': 'Resultados que hablan por sí mismos.',
      'portfolio.cta.btn': 'Escribe tu historia de éxito',

      // Blog
      'blog.label': 'Industria',
      'blog.title': 'Blog',
      'blog.intro': 'Lo último en influencer marketing de fuentes líderes en la industria.',
      'blog.readMore': 'Leer artículo',

      // About
      'about.label': 'Quiénes somos',
      'about.title': 'Una agencia boutique con mentalidad de consultoría',
      'about.p1': 'Somos un equipo multidisciplinario en Ciudad de México que combina estrategia, creatividad y tecnología para transformar cómo las marcas se conectan con sus audiencias.',
      'about.p2': 'Nacimos de la convicción de que el influencer marketing merece un enfoque más riguroso: menos improvisación, más estrategia. Menos vanity metrics, más resultados reales.',
      'about.p3': 'Trabajamos con un número limitado de clientes porque creemos en la profundidad sobre el volumen. Cada campaña recibe nuestra atención completa.',
      'about.pillar1.title': 'Estrategia Primero',
      'about.pillar1.desc': 'Cada decisión respaldada por datos y objetivos claros.',
      'about.pillar2.title': 'Transparencia Total',
      'about.pillar2.desc': 'Acceso en tiempo real a métricas y resultados.',
      'about.pillar3.title': 'Ejecución Impecable',
      'about.pillar3.desc': 'Del concepto al resultado sin fricción.',
      'about.cta': 'Conoce nuestra metodología',

      // Newsletter
      'newsletter.label': 'Mantente informado',
      'newsletter.title': 'Claridad cada semana',
      'newsletter.intro': 'Recibe insights semanales de la industria: tendencias, casos y movimientos en influencer marketing que importan para tu marca.',
      'newsletter.placeholder': 'tu@email.com',
      'newsletter.btn': 'Suscribirme',
      'newsletter.privacy': 'Sin spam. Solo contenido que vale la pena. Cancela cuando quieras.',
      'newsletter.f1': 'Noticias de Forbes, WSJ, NYT',
      'newsletter.f2': 'México, USA y Global',
      'newsletter.f3': 'Cada jueves en tu inbox',
      'newsletter.success': '¡Gracias! Te enviamos un correo de confirmación.',

      // CTA
      'cta.badge': 'Comienza tu viaje',
      'cta.title': 'Impulsa tu marca<br>con nosotros',
      'cta.subtitle': 'Conversación de 30 minutos sobre tu estrategia de influencer marketing. Sin compromiso. Solo claridad sobre cómo podemos ayudarte.',
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
      'nav.about': 'About',
      'nav.newsletter': 'Newsletter',
      'nav.cta': 'Book a call',

      // Hero
      'hero.badge': 'Data-Driven Influencer Marketing',
      'hero.title1': 'Where ideas',
      'hero.title2': 'touch ground',
      'hero.subtitle': 'Influencer marketing strategies that turn reach into measurable ROI.',
      'hero.cta1': 'Book a call',
      'hero.cta2': 'Learn more',

      // Purpose
      'purpose.label': 'What we do',
      'purpose.title': 'We connect brands with creators for campaigns that drive results',
      'purpose.text': 'We are an influencer marketing agency. We design and execute campaigns with a proprietary database of 3,000+ verified creators. Each collaboration is treated as a work of art, not mass production.',
      'purpose.stat1': 'Verified creators',
      'purpose.stat3': 'Real-time communication',

      // Services
      'services.label': 'How we do it',
      'services.title': 'Services',
      'services.intro': 'From strategy to results measurement, we manage your entire influencer campaign process.',
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
      'methodology.label': 'Our process',
      'methodology.title': 'The Costa Compass',
      'methodology.intro': 'How we work each influencer marketing campaign, from creator selection to results measurement.',
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
      'portfolio.intro': 'Influencer marketing campaigns with measurable results.',
      'portfolio.tbb.category': 'Influencer Marketing',
      'portfolio.tbb.desc': 'High-impact influencer collaboration for brand positioning and awareness.',
      'portfolio.tbb.views': 'Views',
      'portfolio.tbb.time': 'Time',
      'portfolio.coming': 'Coming soon',
      'portfolio.consulting': 'Consulting',
      'portfolio.cta.text': 'Results that speak for themselves.',
      'portfolio.cta.btn': 'Write your success story',

      // Blog
      'blog.label': 'Industry',
      'blog.title': 'Blog',
      'blog.intro': 'The latest in influencer marketing from leading industry sources.',
      'blog.readMore': 'Read article',

      // About
      'about.label': 'Who we are',
      'about.title': 'A boutique agency with a consulting mindset',
      'about.p1': 'We are a multidisciplinary team in Mexico City that combines strategy, creativity and technology to transform how brands connect with their audiences.',
      'about.p2': 'We were born from the conviction that influencer marketing deserves a more rigorous approach: less improvisation, more strategy. Less vanity metrics, more real results.',
      'about.p3': 'We work with a limited number of clients because we believe in depth over volume. Each campaign receives our complete attention.',
      'about.pillar1.title': 'Strategy First',
      'about.pillar1.desc': 'Every decision backed by data and clear objectives.',
      'about.pillar2.title': 'Total Transparency',
      'about.pillar2.desc': 'Real-time access to metrics and results.',
      'about.pillar3.title': 'Flawless Execution',
      'about.pillar3.desc': 'From concept to result without friction.',
      'about.cta': 'Discover our methodology',

      // Newsletter
      'newsletter.label': 'Stay informed',
      'newsletter.title': 'Clarity every week',
      'newsletter.intro': 'Get weekly industry insights: trends, cases, and movements in influencer marketing that matter for your brand.',
      'newsletter.placeholder': 'you@email.com',
      'newsletter.btn': 'Subscribe',
      'newsletter.privacy': 'No spam. Only content worth reading. Cancel anytime.',
      'newsletter.f1': 'News from Forbes, WSJ, NYT',
      'newsletter.f2': 'Mexico, USA & Global',
      'newsletter.f3': 'Every Thursday in your inbox',
      'newsletter.success': 'Thank you! We sent you a confirmation email.',

      // CTA
      'cta.badge': 'Start your journey',
      'cta.title': 'Boost your brand<br>with us',
      'cta.subtitle': '30-minute conversation about your influencer marketing strategy. No commitment. Just clarity on how we can help you.',
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

  let setLanguage = function(lang) {
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
  };

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
  // Mobile Detection
  // ==========================================================================
  const isMobile = window.innerWidth < 768;

  // ==========================================================================
  // Video Management
  // ==========================================================================
  function playVideo(video) {
    if (video.paused) {
      video.play().catch(() => {});
    }
  }

  function pauseVideo(video) {
    if (!video.paused) {
      video.pause();
    }
  }

  // Hero video plays on all devices
  const heroVideo = document.querySelector('.hero__video');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.playsInline = true;
    if (heroVideo.readyState >= 3) {
      playVideo(heroVideo);
    } else {
      heroVideo.addEventListener('canplaythrough', () => playVideo(heroVideo), { once: true });
    }
  }

  // Other videos only on desktop
  if (!isMobile) {
    const backgroundVideos = document.querySelectorAll('.proposito__video, .metodologia__video, .valores__video, .cta-final__video, .blog-slider__video');

    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          if (video.preload === 'none' && video.readyState === 0) {
            video.load();
          }
          if (video.readyState >= 3) {
            playVideo(video);
          } else {
            video.addEventListener('canplaythrough', () => playVideo(video), { once: true });
          }
        } else {
          pauseVideo(video);
        }
      });
    }, { rootMargin: '100px', threshold: 0.1 });

    backgroundVideos.forEach(video => {
      video.muted = true;
      video.playsInline = true;
      videoObserver.observe(video);
    });
  }

  // ==========================================================================
  // Parallax Effect - Desktop Only
  // ==========================================================================
  if (!isMobile) {
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
  }

  // ==========================================================================
  // Blog Slider - Simple Scroll Navigation
  // ==========================================================================
  const blogTrack = document.getElementById('blog-track');
  const blogPrev = document.getElementById('blog-prev');
  const blogNext = document.getElementById('blog-next');

  if (blogTrack && blogPrev && blogNext) {
    const scrollAmount = 400;

    blogNext.addEventListener('click', () => {
      blogTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    blogPrev.addEventListener('click', () => {
      blogTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
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
  // Newsletter Form Handler (Beehiiv Integration)
  // ==========================================================================
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterMessage = document.getElementById('newsletter-message');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const btn = this.querySelector('.newsletter__btn');
      const emailInput = this.querySelector('.newsletter__input');
      const email = emailInput.value.trim();
      const beehiivId = this.dataset.beehiivId;

      if (!email) return;

      // Show loading state
      btn.classList.add('is-loading');
      btn.disabled = true;
      newsletterMessage.textContent = '';
      newsletterMessage.className = 'newsletter__message';

      // Create hidden iframe for form submission (bypasses CORS)
      const iframeName = 'beehiiv-submit-' + Date.now();
      const iframe = document.createElement('iframe');
      iframe.name = iframeName;
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Create temporary form targeting the iframe
      const tempForm = document.createElement('form');
      tempForm.method = 'POST';
      tempForm.action = `https://embeds.beehiiv.com/subscribe/${beehiivId}`;
      tempForm.target = iframeName;
      tempForm.style.display = 'none';

      // Add email field
      const emailField = document.createElement('input');
      emailField.type = 'email';
      emailField.name = 'email';
      emailField.value = email;
      tempForm.appendChild(emailField);

      document.body.appendChild(tempForm);
      tempForm.submit();

      // Show success after brief delay (form submitted via iframe)
      setTimeout(() => {
        const successMsg = currentLang === 'en'
          ? 'Thank you! Check your inbox for confirmation.'
          : '¡Gracias! Revisa tu bandeja de entrada.';

        newsletterMessage.textContent = successMsg;
        newsletterMessage.classList.add('is-success');
        emailInput.value = '';

        btn.classList.remove('is-loading');
        btn.disabled = false;

        // Cleanup
        document.body.removeChild(tempForm);
        setTimeout(() => document.body.removeChild(iframe), 5000);
      }, 1500);
    });
  }

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
