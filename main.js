// Corporate Website JavaScript with GSAP Animations

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ===============================
// NAVIGATION FUNCTIONALITY
// ===============================

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

// ===============================
// GSAP ANIMATIONS
// ===============================

// ロゴ上テキストのGSAPアニメーション
if (window.gsap) {
  gsap.from('.logo-en', {
    y: -80,
    opacity: 0,
    duration: 2.2,
    ease: 'power1.out',
    delay: 0.1
  });
  
  gsap.from('.logo-ja', {
    y: 20,
    opacity: 0,
    duration: 2.2,
    ease: 'power3.out',
    delay: 0.5
  });
}

// Hero section animations
gsap.timeline()
  .from('.hero-title', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power3.out'
  })
  .from('.hero-description', {
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  }, '-=0.5')
  .from('.hero-buttons', {
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  }, '-=0.3')
  .from('.floating-element', {
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: 'back.out(1.7)'
  }, '-=0.5');

// ヒーロー画像の初回アニメーション
if (window.gsap) {
  gsap.from('.main-visual-img', {
    y: -80,
    opacity: 0,
    duration: 1.2,
    ease: 'power1.out',
    delay: 0.1
  });
}

// Philosophy section animations
gsap.timeline({
  scrollTrigger: {
    trigger: '#philosophy',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  }
})
  .from('#philosophy .section-title', {
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  })
  .from('#philosophy .section-description', {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: 'power3.out'
  }, '-=0.5')
  .from('#philosophy .philosophy-title', {
    duration: 0.6,
    x: -50,
    opacity: 0,
    ease: 'power3.out'
  }, '-=0.3')
  .from('#philosophy .philosophy-text', {
    duration: 0.6,
    x: -30,
    opacity: 0,
    ease: 'power3.out'
  }, '-=0.2')
  .from('#philosophy .value-item', {
    duration: 0.6,
    x: -50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  }, '-=0.3')
  .from('#philosophy .stat-card', {
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'back.out(1.7)'
  }, '-=0.5');

// Services section animations
gsap.utils.toArray('.service-item').forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: 'power3.out',
    delay: (index % 3) * 0.2,
  });
});

// Company section animations
gsap.timeline({
  scrollTrigger: {
    trigger: '#company',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  }
})
  .from('#company .section-title', {
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  })
  .from('#company .section-description', {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: 'power3.out'
  }, '-=0.5')
  .from('#company .company-section-title', {
    duration: 0.6,
    x: -50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  }, '-=0.3')
  .from('#company .company-details', {
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: 'back.out(1.7)'
  }, '-=0.5')
  .from('#company .location-info', {
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: 'back.out(1.7)'
  }, '-=0.3')
  .from('#company .certifications', {
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: 'back.out(1.7)'
  }, '-=0.3');

// Contact section animations
gsap.timeline({
  scrollTrigger: {
    trigger: '#contact',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  }
})
  .from('#contact .section-title', {
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  })
  .from('#contact .section-description', {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: 'power3.out'
  }, '-=0.5')
  .from('#contact .contact-section-title', {
    duration: 0.6,
    x: -50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  }, '-=0.3')
  .from('#contact .contact-item', {
    duration: 0.6,
    x: -50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  }, '-=0.3')
  .from('#contact .contact-form-section', {
    duration: 0.8,
    x: 50,
    opacity: 0,
    ease: 'power3.out'
  }, '-=0.5');

  // ===============================
  // SCROLL TO TOP BUTTON
  // ===============================
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  const homeSection = document.getElementById('home');

  if (scrollToTopBtn && homeSection) {
    const homeSectionHeight = homeSection.offsetHeight;

    // Show or hide button based on scroll position
    window.addEventListener('scroll', () => {
      // homeセクションの高さより多くスクロールしたらボタンを表示
      if (window.scrollY > homeSectionHeight) {
        scrollToTopBtn.classList.add('show');
      } else {
        scrollToTopBtn.classList.remove('show');
      }
    });

    // Smooth scroll to top on click
    scrollToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

// ===============================
// STATISTICS COUNTER ANIMATION
// ===============================

const animateCounters = () => {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 100;
    let current = 0;
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    // Start animation when element is in view
    ScrollTrigger.create({
      trigger: counter,
      start: 'top 80%',
      onEnter: () => {
        updateCounter();
      },
      onLeaveBack: () => {
        counter.textContent = '0';
      }
    });
  });
};

// Initialize counter animations
animateCounters();

// ===============================
// SERVICE CARDS HOVER EFFECTS
// ===============================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card.querySelector('.service-icon'), {
      duration: 0.3,
      rotation: 360,
      ease: 'power2.out'
    });
  });
});

// ===============================
// COMPANY CARDS HOVER EFFECTS
// ===============================

const companyCards = document.querySelectorAll('.company-details, .location-info, .certifications');

companyCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      duration: 0.3,
      y: -5,
      ease: 'power2.out'
    });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      duration: 0.3,
      y: 0,
      ease: 'power2.out'
    });
  });
});

// ===============================
// CONTACT FORM HANDLING
// ===============================

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });
  
  // Simulate form submission
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  
  submitButton.textContent = '送信中...';
  submitButton.disabled = true;
  
  // Simulate API call
  setTimeout(() => {
    submitButton.textContent = '送信完了！';
    submitButton.style.backgroundColor = '#10b981';
    
    // Reset form
    setTimeout(() => {
      contactForm.reset();
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      submitButton.style.backgroundColor = '';
    }, 2000);
  }, 1500);
});

// ===============================
// PERFORMANCE OPTIMIZATIONS
// ===============================

// Throttle scroll events
let ticking = false;

function updateScrollEffects() {
  // Update navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateScrollEffects);
    ticking = true;
  }
});

// ===============================
// LOADING ANIMATIONS
// ===============================

// Preloader (if needed)
window.addEventListener('load', () => {
  // Initialize any additional animations after page load
  gsap.set('.fade-in', { opacity: 0, y: 30 });
  gsap.set('.fade-in-left', { opacity: 0, x: -30 });
  gsap.set('.fade-in-right', { opacity: 0, x: 30 });
  gsap.set('.scale-in', { opacity: 0, scale: 0.8 });
  
  // Animate elements with specific classes
  gsap.to('.fade-in', {
    duration: 0.8,
    opacity: 1,
    y: 0,
    stagger: 0.2,
    ease: 'power3.out'
  });
});

// ===============================
// MOBILE MENU ANIMATIONS
// ===============================

document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarTogglerIcon = navbarToggler.querySelector('.navbar-toggler-icon');
  const navbarCollapse = document.getElementById('navbarNav');

  if (navbarToggler && navbarCollapse && navbarTogglerIcon) {
    navbarToggler.addEventListener('click', function() {
      const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
      
      // Note: We check !isExpanded because the attribute is updated *after* the click event
      if (!isExpanded) {
        navbarTogglerIcon.classList.remove('navbar-toggler-icon');
        navbarTogglerIcon.classList.add('bi', 'bi-x-lg');
      } else {
        navbarTogglerIcon.classList.remove('bi', 'bi-x-lg');
        navbarTogglerIcon.classList.add('navbar-toggler-icon');
      }
    });

    // Reset icon when menu is hidden
    navbarCollapse.addEventListener('hidden.bs.collapse', function () {
      navbarTogglerIcon.classList.remove('bi', 'bi-x-lg');
      navbarTogglerIcon.classList.add('navbar-toggler-icon');
    });
  }

});
  
// ===============================
// ACCESSIBILITY ENHANCEMENTS
// ===============================

// Keyboard navigation for custom elements  
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    const target = e.target;
    if (target.classList.contains('scroll-indicator')) {
      e.preventDefault();
      target.click();
    }
  }
});

// Add focus indicators for better accessibility
const focusableElements = document.querySelectorAll('a, button, input, textarea, select');

focusableElements.forEach(element => {
  element.addEventListener('focus', () => {
    element.style.outline = '2px solid var(--primary-color)';
    element.style.outlineOffset = '2px';
  });
  
  element.addEventListener('blur', () => {
    element.style.outline = '';
    element.style.outlineOffset = '';
  });
});

// ===============================
// CERTIFICATE HOVER EFFECTS
// ===============================

const certItems = document.querySelectorAll('.cert-item');

certItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    gsap.to(item, {
      duration: 0.3,
      x: 10,
      ease: 'power2.out'
    });
  });
  
  item.addEventListener('mouseleave', () => {
    gsap.to(item, {
      duration: 0.3,
      x: 0,
      ease: 'power2.out'
    });
  });
});

// Companyセクション 画像・テキスト スライドイン
if (window.gsap && window.ScrollTrigger) {
  gsap.from('.company-image', {
    scrollTrigger: {
      trigger: '.company-image',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });
  gsap.from('.company-info', {
    scrollTrigger: {
      trigger: '.company-info',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    x: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.2,
  });
}

// 見出しアニメーション（左→右マスク）
document.querySelectorAll('.section-title, .company-section-title, .contact-section-title').forEach(title => {
  if (window.gsap && window.ScrollTrigger) {
    gsap.fromTo(title, {
      x: -60,
      opacity: 0,
      clipPath: 'inset(0 100% 0 0)',
    }, {
      scrollTrigger: {
        trigger: title,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      x: 0,
      opacity: 1,
      clipPath: 'inset(0 0% 0 0)',
      duration: 1,
      ease: 'power3.out',
    });
  }
});

// 画像アニメーション（下→上フェードイン）
document.querySelectorAll('.company-image, .hero-image').forEach(img => {
  if (window.gsap && window.ScrollTrigger) {
    gsap.from(img, {
      scrollTrigger: {
        trigger: img,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }
});

// Contactセクション フェードイン
if (window.gsap && window.ScrollTrigger) {
  gsap.from('#contact', {
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });
}

console.log('Corporate Website Loaded Successfully! 🚀');