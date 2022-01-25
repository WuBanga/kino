import { MovieList } from '../MovieList/MovieList';
import { Pagination } from '../Pagination/Pagination';
import { useGenres } from '../../hooks/useGenres';
import { useMovies } from '../../hooks/useMovies';
import { useMemo } from 'react';

const path = 'https://image.tmdb.org/t/p/original';
export const Movies = () => {
  const { isLoadingGenres, genres, isErrorGenres } = useGenres();
  const { isLoadingMovies, movies, isErrorMovies } = useMovies({
    type: 'popular',
    page: 2,
  });
  const data = useMemo(() => {
    if (
      isLoadingGenres ||
      isLoadingMovies ||
      genres === undefined ||
      movies === undefined
    ) {
      return [];
    }

    return movies.results.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        genre: capitalize(
          genres.genres.find((genre) => genre.id === movie.genre_ids[0]).name
        ),
        posterLink: `${path}${movie.poster_path}`,
        adult: movie.adult,
        rating: movie.vote_average,
      };
    });
  }, [isLoadingGenres, genres, isLoadingMovies, movies]);

  if (isErrorMovies || isErrorGenres) {
    return <h1>Error</h1>;
  }

  return (
    <section className="movies">
      <MovieList data={data} isLoading={isLoadingGenres || isLoadingMovies} />
      <Pagination />
    </section>
  );
};

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
