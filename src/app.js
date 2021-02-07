import './index.html';
import './main.scss';
import './scripts/header';
import './scripts/scroll';
import { removePreloader } from './scripts/preloader';
import './scripts/portfolio';

window.onload = () => {
  removePreloader();
};
