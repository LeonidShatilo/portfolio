import { CONTENT } from './content';
import { translate } from './utils';

const HOME = document.getElementById('home');
const HEADER = document.querySelector('.header');
const BUTTONS_NAV = document.querySelectorAll('.button__nav');
const BUTTON_LANGUAGE = document.querySelector('.button__language');
const BUTTON_EN_LANG = document.getElementById('en');
const BUTTON_RU_LANG = document.getElementById('ru');
const CURRENT_LANG = document.querySelector('.current-language');
const ARROW = document.querySelector('.arrow');
const DROPDOWN_MENU = document.querySelector('.dropdown-menu');

let isOpenMenu = false;

function changeStatusLangButtons(selected, another) {
  selected.disabled = 'true';
  another.removeAttribute('disabled');
  selected.classList.add('dropdown-menu__item--active');
  another.classList.remove('dropdown-menu__item--active');
}

export function getLanguageInLocalStorage() {
  if (
    localStorage.getItem('language') === null
    || localStorage.getItem('language') === 'en'
  ) {
    CONTENT.language = 'en';
    CURRENT_LANG.innerHTML = `${CONTENT.language}`;
    document.title = 'Leonid Shatilo';
    changeStatusLangButtons(BUTTON_EN_LANG, BUTTON_RU_LANG);
  } else {
    CONTENT.language = 'ru';
    CURRENT_LANG.innerHTML = `${CONTENT.language}`;
    document.title = 'Леонид Шатило';
    changeStatusLangButtons(BUTTON_RU_LANG, BUTTON_EN_LANG);
  }
}

export function setLanguageInLocalStorage() {
  localStorage.setItem('language', CONTENT.language);
}

function hideMenu() {
  isOpenMenu = false;
  ARROW.classList.remove('arrow--up');
  DROPDOWN_MENU.classList.remove('dropdown-menu--open');
  setTimeout(() => {
    DROPDOWN_MENU.style.display = 'none';
  }, 600);
}

function showMenu() {
  isOpenMenu = true;
  ARROW.classList.add('arrow--up');
  DROPDOWN_MENU.style.display = 'block';
  setTimeout(() => {
    DROPDOWN_MENU.classList.add('dropdown-menu--open');
  }, 200);
}

BUTTON_LANGUAGE.addEventListener('click', () => {
  if (isOpenMenu) {
    hideMenu();
  } else {
    showMenu();
  }
});

BUTTON_EN_LANG.addEventListener('click', () => {
  CONTENT.language = 'en';
  setLanguageInLocalStorage();
  translate();
  changeStatusLangButtons(BUTTON_EN_LANG, BUTTON_RU_LANG);
  hideMenu();
  CURRENT_LANG.innerHTML = 'en';
});

BUTTON_RU_LANG.addEventListener('click', () => {
  CONTENT.language = 'ru';
  setLanguageInLocalStorage();
  translate();
  changeStatusLangButtons(BUTTON_RU_LANG, BUTTON_EN_LANG);
  hideMenu();
  CURRENT_LANG.innerHTML = 'ru';
});

document.onclick = (event) => {
  if (!isOpenMenu) {
    return;
  }
  if (
    event.target !== CURRENT_LANG
    && event.target !== BUTTON_LANGUAGE
    && event.target !== ARROW
  ) {
    hideMenu();
  }
};

for (let index = 0; index < BUTTONS_NAV.length; index++) {
  BUTTONS_NAV[index].addEventListener('click', (event) => {
    BUTTONS_NAV.forEach((element) => element.classList.remove('button__nav--active'));
    event.currentTarget.classList.add('button__nav--active');
  });
}

window.addEventListener('scroll', () => {
  const TRIGGER_HEIGHT = HOME.offsetHeight - HEADER.offsetHeight;

  if (window.scrollY > TRIGGER_HEIGHT) {
    HEADER.classList.add('background');
    DROPDOWN_MENU.classList.add('background');
  } else {
    HEADER.classList.remove('background');
    DROPDOWN_MENU.classList.remove('background');
  }
});
