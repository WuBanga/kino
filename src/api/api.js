import { apiKey } from './config';

export const requestMovies = async ({ type, language = 'ru-RU', page = 1 }) => {
  const path = `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=${language}&region=RU&page=${page}`;

  const response = await fetch(path);
  return await response.json();
};

export const requestGenres = async (language = 'ru-RU') => {
  const path = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=${language}`;

  const response = await fetch(path);
  return await response.json();
};
