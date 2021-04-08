const PRELOADER = document.querySelector('.preloader');
const ICON_PRELOADER = document.querySelector('.preloader__icon');

// eslint-disable-next-line import/prefer-default-export
export function removePreloader() {
  setTimeout(() => {
    ICON_PRELOADER.classList.add('preloader__icon--hide');
  }, 500);
  setTimeout(() => {
    PRELOADER.classList.add('preloader--hide');
  }, 1300);
  setTimeout(() => {
    document.body.classList.remove('no-scroll');
  }, 1400);
  setTimeout(() => {
    PRELOADER.remove();
  }, 2000);
}
