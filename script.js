// Hamburger Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Background Slideshow (only on pages that have the slideshow element)
const slideshow = document.getElementById('slideshow');

if (slideshow) {
  const images = [
    'img/slide1.webp',
    'img/slide2.webp',
    'img/slide3new.webp'
  ];

  let index = 0;

  function changeBackground() {
    slideshow.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
  }

  changeBackground();
  setInterval(changeBackground, 4000); // every 4 seconds
}
