const backDrop = document.querySelector('.backdrop');
const cardEl = document.querySelector('.gallery');
let modalContainer = document.querySelector('.modal__container');
const body = document.querySelector('body');

function removeListener() {
  backDrop.classList.add('visually-hidden');

  body.style.overflow = 'visible';
  cardEl.removeEventListener('click', onBackDropModalClose);
}
export function onBackDropModalClose(e) {
  if (e.target.className !== 'backdrop js-modal') {
    return;
  }
  modalContainer.innerHTML = '';
  removeListener();
}
export function onBtnModalClose(e) {
  modalContainer.innerHTML = '';
  removeListener();
}

export function onEscapeModalClose(e) {
  if (e.key !== 'Escape') {
    return;
  }
  modalContainer.innerHTML = '';
  removeListener();
}
