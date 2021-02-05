const HOME = document.getElementById('home');
const HEADER = document.querySelector('.header');
const BUTTONS_NAV = document.querySelectorAll('.button_nav');
const BUTTON_LANGUAGE = document.querySelector('.button__language');
const BUTTON_EN_LANG = document.getElementById('en');
const BUTTON_RU_LANG = document.getElementById('ru');
const CURRENT_LANG = document.querySelector('.current-language');
const ARROW = document.querySelector('.arrow');
const DROPDOWN_MENU = document.querySelector('.dropdown-menu');

let isOpenMenu = false;

function hideMenu() {
  isOpenMenu = false;
  ARROW.classList.toggle('arrow--up');
  DROPDOWN_MENU.classList.remove('dropdown-menu--open');
  setTimeout(() => {
    DROPDOWN_MENU.style.display = 'none';
  }, 600);
}

function showMenu() {
  isOpenMenu = true;
  ARROW.classList.toggle('arrow--up');
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

function changeLanguage(selected, another) {
  selected.disabled = 'true';
  another.removeAttribute('disabled');
  selected.classList.add('button--active');
  another.classList.remove('button--active');
  DROPDOWN_MENU.classList.remove('dropdown-menu--open');
  isOpenMenu = false;
}

BUTTON_EN_LANG.addEventListener('click', () => {
  changeLanguage(BUTTON_EN_LANG, BUTTON_RU_LANG);
  CURRENT_LANG.innerHTML = 'EN';
});

BUTTON_RU_LANG.addEventListener('click', () => {
  changeLanguage(BUTTON_RU_LANG, BUTTON_EN_LANG);
  CURRENT_LANG.innerHTML = 'RU';
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
    BUTTONS_NAV.forEach((element) => element.classList.remove('active'));
    event.currentTarget.classList.add('active');
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
