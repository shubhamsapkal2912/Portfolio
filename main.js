// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});

// Close nav when clicking link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('active');
  });
});

// Neural Network Particle Animation
const neuralBg = document.getElementById('neuralBg');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.cssText = `
    position: absolute;
    width: ${Math.random() * 3 + 1}px;
    height: ${Math.random() * 3 + 1}px;
    background: rgba(0, 245, 255, ${Math.random() * 0.5 + 0.2});
    border-radius: 50%;
    top: ${Math.random() * 100}%;
    left: ${Math.random() * 100}%;
    animation: float ${Math.random() * 20 + 10}s linear infinite;
    box-shadow: 0 0 ${Math.random() * 10 + 5}px rgba(0, 245, 255, 0.5);
  `;
  neuralBg.appendChild(particle);
}

// Particle float animation
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
    50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
    75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
  }
`;
document.head.appendChild(style);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all glass cards and sections
document.querySelectorAll('.glass-card, .section').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Typewriter Effect
const typewriterText = document.querySelector('.typing-text');
if (typewriterText) {
  const text = typewriterText.textContent;
  typewriterText.textContent = '';
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      typewriterText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  
  setTimeout(typeWriter, 500);
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate form submission
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span>Sending...</span>';
    btn.disabled = true;
    
    setTimeout(() => {
      btn.innerHTML = '<span>✓ Message Sent!</span>';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        contactForm.reset();
      }, 2000);
    }, 1500);
  });
}

// Active Nav Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Cursor Glow Effect (Optional - Advanced)
const cursorGlow = document.createElement('div');
cursorGlow.style.cssText = `
  position: fixed;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 245, 255, 0.1) 0%, transparent 70%);
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s;
  opacity: 0;
`;
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
  cursorGlow.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
  cursorGlow.style.opacity = '0';
});

// Console Easter Egg
console.log('%c🤖 Welcome to Shubham\'s Portfolio!', 'color: #00f5ff; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with: HTML, CSS, JavaScript & lots of ☕', 'color: #a855f7; font-size: 14px;');
console.log('%cInterested in the code? Check out my GitHub!', 'color: #8892b0; font-size: 12px;');
