import * as filmsAPI from './js/api/fetchFilms.js';
import { filmsPagination } from './js/pagination/filmsPagination.js';
import './js/api/trendingFilmRender';
import './js/api/searchFilmsByNameRender';
// import { onTrendingFilmsRender } from './js/api/trendingFilmRender';
// document.addEventListener('DOMContentLoaded', onTrendingFilmsRender);
// Используем как filmsAPI.searchMovies() и прочее
// Пример
// document.querySelector('.yourSelector').addEventListener('click', () => {
//   return filmsAPI.searchMovies('batman').then(r => console.log(r));
// });