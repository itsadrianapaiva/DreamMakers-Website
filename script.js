

const navToggle = document.getElementById('navToggle');


navToggle.addEventListener('click', () => {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
});
