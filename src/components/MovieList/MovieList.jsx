import { useGenres } from '../../hooks/useGenres';
import { useMovies } from '../../hooks/useMovies';
import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.css';

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const MovieList = () => {
  const path = 'https://image.tmdb.org/t/p/original';
  const { isLoading, data, isError } = useMovies('popular');
  const { isLoadingGenres, genres, isErrorGenres } = useGenres();
  if (isError || isErrorGenres) {
    return <h1>Error</h1>;
  }

  if (isLoading || isLoadingGenres) {
    return <h1>Loading</h1>;
  }

  return (
    <section className="movie-list">
      {data.results.map((movie) => (
        <MovieCard
          id={movie.id}
          key={movie.id}
          title={movie.title}
          genre={capitalize(
            genres.genres.filter((genre) => genre.id === movie.genre_ids[0])[0]
              .name
          )}
          posterLink={path + movie.poster_path}
          adult={movie.adult}
          rating={movie.vote_average}
        />
      ))}
    </section>
  );
};
