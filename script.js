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
    'img/slide1.jpg',
    'img/slide2.jpeg',
    'img/slide3new.jpg'
  ];

  let index = 0;

  function changeBackground() {
    slideshow.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
  }

  changeBackground();
  setInterval(changeBackground, 4000); // every 4 seconds
}
