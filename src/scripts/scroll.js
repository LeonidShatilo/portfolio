const HEADER = document.querySelector('.header');
const SECTIONS = document.querySelectorAll('.section');
const BUTTONS_NAV = document.querySelectorAll('.button_nav');

window.addEventListener('scroll', () => {
  const SCROLL_DISTANCE = window.scrollY;

  SECTIONS.forEach((element, index) => {
    if (element.offsetTop - HEADER.clientHeight <= SCROLL_DISTANCE) {
      BUTTONS_NAV.forEach((element) => {
        if (element.classList.contains('active')) {
          element.classList.remove('active');
        }
      });
      BUTTONS_NAV[index].classList.add('active');
    }
  });
});
