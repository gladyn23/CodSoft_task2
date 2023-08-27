function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };

  const body = document.querySelector('body'),
  toggle = document.querySelector('toggle');

  toggle.addEventListener('click', () => toggle.classList.toggle('active'));
  