/**
 * Navigation and Interactivity for Static Single-Page Site
 * Vanilla JavaScript - No dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
      mobileToggle.innerHTML = isExpanded ? '✕' : '☰';
    });
  }

  // 2. Smooth Scrolling for Anchor Links
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          mobileToggle.innerHTML = '☰';
        }

        // Calculate offset for fixed header
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 3. Active Navigation State Highlighting (Intersection Observer)
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  const observerOptions = {
    root: null,
    rootMargin: '-80px 0px -60% 0px', // Adjust based on header height and desired trigger point
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        
        // Remove active class from all links
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${currentId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });

  // 4. Simple Form Submission Handler (Prevent default for demo)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      
      btn.textContent = 'Sending...';
      btn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        btn.textContent = 'Message Sent!';
        btn.style.backgroundColor = '#10b981'; // Success green
        contactForm.reset();
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.backgroundColor = '';
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }
});