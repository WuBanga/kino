import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.css';
export const MovieList = () => {
  return (
    <section className="movie-list">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </section>
  );
};
