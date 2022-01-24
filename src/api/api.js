import { apiKey } from './config';

export const requestMovies = async (type, language = 'ru-RU') => {
  const path = `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=${language}&region=RU`;

  const response = await fetch(path);
  return await response.json();
};

export const requestGenres = async (language = 'ru-RU') => {
  const path = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=${language}`;

  const response = await fetch(path);
  return await response.json();
};
