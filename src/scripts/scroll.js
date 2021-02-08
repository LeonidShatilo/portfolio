const HEADER = document.querySelector('.header');
const SECTIONS = document.querySelectorAll('.section');
const BUTTONS_NAV = document.querySelectorAll('.button_nav');
const ANCHORS = document.querySelectorAll('a[href*="#"]');

window.addEventListener('scroll', () => {
  const SCROLL_DISTANCE = window.scrollY;

  SECTIONS.forEach((element, index) => {
    if (element.offsetTop - HEADER.clientHeight <= SCROLL_DISTANCE) {
      BUTTONS_NAV.forEach((element) => {
        if (element.classList.contains('button_nav--active')) {
          element.classList.remove('button_nav--active');
        }
      });
      BUTTONS_NAV[index].classList.add('button_nav--active');
    }
  });
});

ANCHORS.forEach((anchor) => {
  const SECTION = anchor.getAttribute('href').substr(1);

  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById(SECTION).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
