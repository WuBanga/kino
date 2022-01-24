import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.css';

export const MovieList = (props) => {
  const { data, isLoading } = props;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="movie-list">
      {data.map((movie) => (
        <MovieCard
          id={movie.id}
          key={movie.id}
          title={movie.title}
          genre={movie.genre}
          posterLink={movie.posterLink}
          adult={movie.adult}
          rating={movie.rating}
        />
      ))}
    </section>
  );
};
