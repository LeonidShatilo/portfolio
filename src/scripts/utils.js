import { CONTENT } from './content';

const HOME = document.querySelector('.header__home');
const ABOUT = document.querySelector('.header__about');
const PORTFOLIO = document.querySelector('.header__portfolio');
const CONTACTS = document.querySelector('.header__contacts');

const INTRODUCE_TITLE = document.querySelector('.introduce__title');
const INTRODUCE_SUBTITLE = document.querySelector('.introduce__subtitle');

const SCROLL_TEXT = document.querySelector('.scroll-text');

const ABOUT_TITLE = document.querySelector('.about__title');
const ABOUT_DESCRIPTION = document.querySelector('.about__description');
const ABOUT_MASTERED = document.querySelector('.about__mastered');

const PORTFOLIO_HEADER = document.querySelector('.portfolio__header');
const FILTER_TITLE = document.querySelector('.filter__title');
const DEMOS = document.querySelectorAll('.demo');
const TECH_TITLES = document.querySelectorAll('.work__technologies-title');

const FANCY_WEATHER = document.querySelector('.fancy-weather');
const RAINDROPS = document.querySelector('.raindrops');
const SOCKET = document.querySelector('.socket');
const SIMPLE_SINGOLO = document.querySelector('.simple-singolo');
const CALCULATOR = document.querySelector('.calculator');
const LANDING_PAGE = document.querySelector('.dynamic-landing-page');
const MEDITATION_APP = document.querySelector('.meditation-app');
const WHACK_A_MOLE = document.querySelector('.whack-a-mole');
const VIRTUAL_KEYBOARD = document.querySelector('.virtual-keyboard');
const DRUM_KIT = document.querySelector('.drum-kit');
const FUN_CANVAS = document.querySelector('.fun-canvas');
const SPEED_CONTROLLER = document.querySelector('.video-speed-controller');
const CUSTOM_PLAYER = document.querySelector('.custom-video-player');
const FLEX_PANEL = document.querySelector('.flex-panel-gallery');
const CSS_VARIABLES = document.querySelector('.css-variables-and-js');

const CONTACTS_TITLE = document.querySelector('.contacts__title');
const CONTACTS_SUBTITLE = document.querySelector('.contacts__subtitle');
const CONTACTS_EMAIL = document.querySelector('.contacts__email');
const CONTACTS_PHONE = document.querySelector('.contacts__phone');

// eslint-disable-next-line import/prefer-default-export
export function translate() {
  HOME.innerHTML = CONTENT.header.home[CONTENT.language];
  ABOUT.innerHTML = CONTENT.header.about[CONTENT.language];
  PORTFOLIO.innerHTML = CONTENT.header.portfolio[CONTENT.language];
  CONTACTS.innerHTML = CONTENT.header.contacts[CONTENT.language];

  INTRODUCE_TITLE.innerHTML = CONTENT.home.title[CONTENT.language];
  INTRODUCE_SUBTITLE.innerHTML = CONTENT.home.subtitle[CONTENT.language];

  SCROLL_TEXT.innerHTML = CONTENT.home.scrollText[CONTENT.language];

  ABOUT_TITLE.innerHTML = CONTENT.about.title[CONTENT.language];
  ABOUT_DESCRIPTION.innerHTML = CONTENT.about.description[CONTENT.language];
  ABOUT_MASTERED.innerHTML = CONTENT.about.mastered[CONTENT.language];

  PORTFOLIO_HEADER.innerHTML = CONTENT.portfolio.header[CONTENT.language];
  FILTER_TITLE.innerHTML = CONTENT.portfolio.filter[CONTENT.language];

  DEMOS.forEach((item) => {
    item.innerHTML = CONTENT.portfolio.demo[CONTENT.language];
  });
  TECH_TITLES.forEach((item) => {
    item.innerHTML = CONTENT.portfolio.technologiesTitle[CONTENT.language];
  });

  FANCY_WEATHER.innerHTML = CONTENT.works.fancyWeather[CONTENT.language];
  RAINDROPS.innerHTML = CONTENT.works.raindrops[CONTENT.language];
  SOCKET.innerHTML = CONTENT.works.socket[CONTENT.language];
  SIMPLE_SINGOLO.innerHTML = CONTENT.works.singolo[CONTENT.language];
  CALCULATOR.innerHTML = CONTENT.works.calculator[CONTENT.language];
  LANDING_PAGE.innerHTML = CONTENT.works.landingPage[CONTENT.language];
  MEDITATION_APP.innerHTML = CONTENT.works.meditationApp[CONTENT.language];
  WHACK_A_MOLE.innerHTML = CONTENT.works.whackMole[CONTENT.language];
  VIRTUAL_KEYBOARD.innerHTML = CONTENT.works.virtualKeyboard[CONTENT.language];
  DRUM_KIT.innerHTML = CONTENT.works.drumKit[CONTENT.language];
  FUN_CANVAS.innerHTML = CONTENT.works.funCanvas[CONTENT.language];
  SPEED_CONTROLLER.innerHTML = CONTENT.works.videoSpeedController[CONTENT.language];
  CUSTOM_PLAYER.innerHTML = CONTENT.works.customVideoPlayer[CONTENT.language];
  FLEX_PANEL.innerHTML = CONTENT.works.flexPanelGallery[CONTENT.language];
  CSS_VARIABLES.innerHTML = CONTENT.works.cssVariables[CONTENT.language];

  CONTACTS_TITLE.innerHTML = CONTENT.contacts.title[CONTENT.language];
  CONTACTS_SUBTITLE.innerHTML = CONTENT.contacts.subtitle[CONTENT.language];
  CONTACTS_EMAIL.innerHTML = CONTENT.contacts.email[CONTENT.language];
  CONTACTS_PHONE.innerHTML = CONTENT.contacts.phone[CONTENT.language];
}
