(function () {
  'use strict';

  /* 1. TYPEWRITER */
  var roles = ['Full Stack Engineer', 'Angular Developer', 'Django Backend Dev', 'REST API Architect', 'Problem Solver'];
  var ri = 0, ci = 0, del = false;
  var tel = document.getElementById('typingText');

  function tw() {
    if (!tel) return;
    var cur = roles[ri];
    tel.textContent = del ? cur.substring(0, ci - 1) : cur.substring(0, ci + 1);
    del ? ci-- : ci++;
    var d = del ? 60 : 100;
    if (!del && ci === cur.length) { d = 1800; del = true; }
    else if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; d = 400; }
    setTimeout(tw, d);
  }
  setTimeout(tw, 800);

  /* 2. HERO PARTICLES */
  var hp = document.getElementById('heroParticles');
  if (hp) {
    for (var i = 0; i < 35; i++) {
      var dot = document.createElement('div');
      dot.className = 'particle-dot';
      var s = Math.random() * 5 + 2;
      dot.style.cssText =
        'width:' + s + 'px;height:' + s + 'px;' +
        'left:' + Math.random() * 100 + '%;top:' + Math.random() * 100 + '%;' +
        'animation-duration:' + (Math.random() * 15 + 10) + 's;' +
        'animation-delay:' + (Math.random() * 8) + 's;';
      hp.appendChild(dot);
    }
  }

  /* 3. NAVBAR SCROLL */
  var nb = document.getElementById('mainNavbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) { nb.style.boxShadow = '0 4px 24px rgba(26,115,232,.15)'; nb.style.padding = '.5rem 0'; }
    else { nb.style.boxShadow = '0 2px 16px rgba(26,115,232,.08)'; nb.style.padding = '.8rem 0'; }
  });

  /* 4. ACTIVE NAV */
  var secs = document.querySelectorAll('section[id]');
  var nls = document.querySelectorAll('#mainNavbar .nav-link');
  function upNav() {
    var cur = '';
    secs.forEach(function (s) { if (window.scrollY >= s.offsetTop - 150) cur = s.getAttribute('id'); });
    nls.forEach(function (l) {
      l.classList.remove('active');
      if (l.getAttribute('href') && l.getAttribute('href').includes(cur)) l.classList.add('active');
    });
  }
  window.addEventListener('scroll', upNav);

  /* 5. SMOOTH SCROLL */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var t = document.querySelector(this.getAttribute('href'));
      if (t) {
        e.preventDefault();
        window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - 75, behavior: 'smooth' });
        var nc = document.getElementById('navbarNav');
        if (nc && nc.classList.contains('show') && typeof $ !== 'undefined') $(nc).collapse('hide');
      }
    });
  });

  /* 6. SCROLL ANIMATIONS */
  var aels = document.querySelectorAll('.animate-on-scroll');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          setTimeout(function () { e.target.classList.add('visible'); }, i * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    aels.forEach(function (el) { obs.observe(el); });
  } else {
    aels.forEach(function (el) { el.classList.add('visible'); });
  }

  /* 7. CONTACT FORM */
  var cf = document.getElementById('contactForm');
  var sb = document.getElementById('sendBtn');
  if (cf) {
    cf.addEventListener('submit', function (e) {
      e.preventDefault();
      var n = document.getElementById('contactName').value.trim();
      var em = document.getElementById('contactEmail').value.trim();
      var msg = document.getElementById('contactMessage').value.trim();
      if (!n || !em || !msg) { showAlert('Please fill in all required fields.', 'danger'); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { showAlert('Please enter a valid email address.', 'danger'); return; }
      var oh = sb.innerHTML;
      sb.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
      sb.disabled = true;
      setTimeout(function () {
        sb.innerHTML = '<i class="fas fa-check mr-2"></i>Message Sent!';
        sb.style.background = 'linear-gradient(135deg,#10b981,#059669)';
        showAlert('Thank you! Your message has been sent successfully.', 'success');
        cf.reset();
        setTimeout(function () { sb.innerHTML = oh; sb.style.background = ''; sb.disabled = false; }, 3500);
      }, 1600);
    });
  }

  function showAlert(msg, type) {
    var ex = document.getElementById('formAlert'); if (ex) ex.remove();
    var al = document.createElement('div');
    al.id = 'formAlert';
    al.className = 'alert alert-' + type + ' mt-3';
    al.style.cssText = 'border-radius:10px;font-size:.9rem;font-weight:500;';
    al.innerHTML = '<i class="fas fa-' + (type === 'success' ? 'check-circle' : 'exclamation-circle') + ' mr-2"></i>' + msg;
    cf.appendChild(al);
    setTimeout(function () { if (al.parentNode) al.remove(); }, 4000);
  }

  /* 8. SKILL HOVER */
  document.querySelectorAll('.skill-card').forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      this.querySelectorAll('.skill-tags span').forEach(function (s, i) {
        setTimeout(function () { s.style.transform = 'scale(1.05)'; }, i * 40);
      });
    });
    card.addEventListener('mouseleave', function () {
      this.querySelectorAll('.skill-tags span').forEach(function (s) { s.style.transform = 'scale(1)'; });
    });
  });

  /* 9. BOOTSTRAP SCROLLSPY */
  if (typeof $ !== 'undefined') $('body').scrollspy({ target: '#mainNavbar', offset: 80 });

  /* 10. CONSOLE EASTER EGG */
  console.log('%c Shubham Sapkal | Portfolio', 'color:#1a73e8;font-size:20px;font-weight:bold;');
  console.log('%c Full Stack Engineer | Angular + Django', 'color:#0ea5e9;font-size:13px;');
  console.log('%c shubhamsapkal2912@gmail.com', 'color:#10b981;font-size:12px;');

})();
