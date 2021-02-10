import './index.html';
import './main.scss';
import {
  getLanguageInLocalStorage,
  setLanguageInLocalStorage,
} from './scripts/header';
import './scripts/scroll';
import { removePreloader } from './scripts/preloader';
import './scripts/portfolio';
import { translate } from './scripts/utils';

function getAndSetLanguage() {
  return new Promise((resolve) => {
    getLanguageInLocalStorage();
    setLanguageInLocalStorage();
    translate();
    setTimeout(() => {
      resolve();
    }, 0);
  });
}

window.onload = () => {
  getAndSetLanguage().then(() => {
    removePreloader();
  });
};
