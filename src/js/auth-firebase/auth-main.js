import './auth-refs';
import './auth-locstorage';
import './firebase';
import './database-refs';

// import { getUserProfile, signOutOfFirebase } from './js/firebase';
// import {
//   getDatafromFirebase,
//   postDataToFirebase,
//   clearDtbFirebase,
// } from './js/firebase-db';
// import { LocStorageMovies, checkMovieInLs } from './js/locstr-movies';
// import { renderMoviesList } from './js/render-list';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { checkUserAuthState, checkAuthUser } from './js/auth-state';
// import { getMovieId } from './js/base';
// import { removeDataFromDb } from './js/firebase-db';

import { checkUserAuthState } from './auth-userstate';

checkUserAuthState();

// refs.btnAddToQueue.addEventListener('click', onAddBtn);
// refs.btnAddToWatched.addEventListener('click', onAddBtn);
// refs.btnQueue.addEventListener('click', onQueueWatchedBtn);
// refs.btnWatched.addEventListener('click', onQueueWatchedBtn);
// refs.btnDelFromWatched.addEventListener('click', onBtnDel);
// refs.btnDelFromQueue.addEventListener('click', onBtnDel);

// function onAddBtn(event) {
//   const isUserAuthorised = checkAuthUser();
//   if (!isUserAuthorised) {
//     Notify.failure(
//       '"You are not authorized. Please sign in to your account or register."'
//     );
//     return;
//   }

//   const jsAttrValue = event.target.attributes.js_add.value;
//   const value = getMovieValueState(jsAttrValue);

//   const movieDetails = getOneMovieDetails();
//   const isMovieInLs = LocStorageMovies.findMovieById(movieDetails.id, value);
//   if (isMovieInLs) {
//     Notify.failure('This movie is already in the library.');
//     return;
//   }

//   movieDetails.preftype = value;
//   postDataToFirebase(movieDetails);
// }

// function onQueueWatchedBtn(event) {
//   const isUserAuthorised = checkAuthUser();
//   if (!isUserAuthorised) {
//     Notify.failure(
//       'You are not authorized. Please sign in to your account or register.'
//     );
//     return;
//   }

//   const jsAttrValue = event.target.attributes.js_state.value;
//   const value = getMovieValueState(jsAttrValue);

//   const moviesList = LocStorageMovies.getMoviesList(value);
//   if (!moviesList) {
//     Notify.failure('Movie list is empty.');
//     LocStorageMovies.removeMovieList(value);
//   }
//   renderMoviesList(moviesList, value);
// }

// function onBtnDel(event) {
//   const isUserAuthorised = checkAuthUser();
//   if (!isUserAuthorised) {
//     Notify.failure(
//       'You are not authorized. Please sign in to your account or register.'
//     );
//     return;
//   }

//   const jsAttrValue = event.target.attributes.js_del.value;
//   const value = getMovieValueState(jsAttrValue);

//   const movieId = getMovieId();
//   const frbId = LocStorageMovies.getFrbKeyByMovieId(movieId, value);
//   if (!frbId) {
//     Notify.failure('Something went wrong.');
//     return;
//   }
//   removeDataFromDb(frbId);
// }

// function getMovieValueState(value) {
//   if (value === 'watched') {
//     return 'watched';
//   } else if (value === 'queue') {
//     return 'queue';
//   } else {
//     return;
//   }
// }
