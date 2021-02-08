const FILTER = document.querySelector('.portfolio__filter');
const FILTER_BUTTONS = document.querySelectorAll('.portfolio__filter-button');
const WORKS = document.querySelectorAll('.work_wrapper');

FILTER.addEventListener('click', (event) => {
  console.log(event.target.value);
  if (event.target.value === undefined) {
    return;
  }
  for (let i = 0; i < WORKS.length; i++) {
    if (WORKS[i].classList.contains(event.target.value)) {
      setTimeout(() => {
        WORKS[i].classList.remove('work_wrapper--hide');
      }, 400);
      WORKS[i].style.display = 'flex';
    } else {
      WORKS[i].classList.add('work_wrapper--hide');
      setTimeout(() => {
        WORKS[i].style.display = 'none';
      }, 400);
    }
  }
});

for (let index = 0; index < FILTER_BUTTONS.length; index++) {
  FILTER_BUTTONS[index].addEventListener('click', (event) => {
    FILTER_BUTTONS.forEach((element) => element.classList.remove('portfolio__filter-button--active'));
    event.currentTarget.classList.add('portfolio__filter-button--active');
  });
}
