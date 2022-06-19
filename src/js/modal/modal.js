import * as filmsAPI from '../api/fetchFilms';

import { genresModal } from '../modal/genresModal.js';
import { onBackDropModalClose } from '../modal/modal-close.js';
import { onBtnModalClose } from '../modal/modal-close.js';
import { onEscapeModalClose } from '../modal/modal-close.js';
import { renderModal } from '../modal/renderModalHome';
import { addFilmsToLocal } from '../local-storage/addDataToLocalStorage';

let movieId = '';

const backDrop = document.querySelector('.backdrop');
let modalContainer = document.querySelector('.modal__container');
const btnClose = document.querySelector('.js-modal-btn');
const cardEl = document.querySelector('.gallery');
cardEl.addEventListener('click', onClickCard);
const sliderEl = document.querySelector('.swiper-wrapper');
sliderEl.addEventListener('click', onClickCard);
const body = document.querySelector('body');

//object from localStorage
let localStorageFilmCard = {
  id: '',
  poster_path: '',
  original_title: '',
  vote_average: '',
  vote_count: '',
  popularity: '',
  original_title: '',
  genres: '',
  overview: '',
  release_date: '',
};

export async function onClickCard(e) {
  if (e.currentTarget === sliderEl) {
    if (e.target.className !== 'slide-poster') {
      return;
    }
  } else {
    if (
      e.target.className !== 'gallery__item' &&
      e.target.className !== 'gallery__image' &&
      e.target.className !== 'gallery__title' &&
      e.target.className !== 'gallery__genres' &&
      e.target.className !== 'gallery__date' &&
      e.target.className !== 'gallery__vote'
    ) {
      return;
    }
  }
  body.style.overflow = 'hidden';
  backDrop.classList.remove('visually-hidden');

  const id = document.querySelector('.gallery__item');
  if (e.currentTarget === sliderEl) {
    movieId = e.target.dataset.id;
  } else {
    if (e.target.className !== 'gallery__item') {
      movieId = e.target.parentElement.dataset.id;
    } else {
      movieId = e.target.dataset.id;
    }
  }

  //film on id
  const filmsData = await filmsAPI.getOneMovieDetails(movieId);
  genresModal(filmsData);

  const cardModal = renderModal(filmsData);

  modalContainer.insertAdjacentHTML('afterbegin', cardModal);

  localStorageFilmCard.id = movieId;
  localStorageFilmCard.poster_path = `https://image.tmdb.org/t/p/original${filmsData.poster_path}`;
  localStorageFilmCard.original_title = filmsData.original_title;
  localStorageFilmCard.vote_average = filmsData.vote_average;
  localStorageFilmCard.vote_count = filmsData.vote_count;
  localStorageFilmCard.popularity = filmsData.popularity;
  localStorageFilmCard.original_title = filmsData.original_title;
  localStorageFilmCard.genres = filmsData.genres;
  localStorageFilmCard.overview = filmsData.overview;
  localStorageFilmCard.release_date = filmsData.release_date;

  const btnList = document.querySelector('.button-modal');

  btnClose.addEventListener('click', onBtnModalClose);
  document.addEventListener('keydown', onEscapeModalClose);
  backDrop.addEventListener('click', onBackDropModalClose);
  btnList.addEventListener('click', onAddLibraryFilm);
}

async function onAddLibraryFilm(e) {
  const film = await localStorageFilmCard;
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  if (e.target.dataset.action === 'add-to-watched') {
    const localKey = 'watchedFilms';
    addFilmsToLocal(film, localKey);
  } else {
    const localKey = 'queueFilms';
    addFilmsToLocal(film, localKey);
  }
}
