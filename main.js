// =============================================
// MAIN.JS - Bruno Fernandes Portfolio
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  // === Inicializa as Partículas ===
  if (typeof particlesJS !== "undefined") {
    // Partículas para o header
    particlesJS("particles-js", {
      particles: {
        number: { value: 50 },
        size: { value: 4 },
        color: { value: "#FF0000" }, // Alterado para preto
        line_linked: { enable: true, color: "#FF0000" }, // Alterado para preto
        move: { speed: 1.5 },
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "pulse" },
          onclick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 100 },
        },
      },
    });

    // Partículas para a seção 'Sobre Mim'
    particlesJS("particles-fazemos", {
      particles: {
        number: { value: 60 },
        size: { value: 3 },
        color: { value: "#FF0000" }, // Alterado para preto
        opacity: { value: 0.5 },
        line_linked: { enable: false },
        move: { speed: 0.5 },
      },
    });
  }

  // === Scroll Suave para âncoras internas ===
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // === Toggle de Menu Responsivo (se houver) ===
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});