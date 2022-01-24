import './MovieCard.css';
import { Poster } from '../Poster/Poster';

export const MovieCard = (props) => {
  const { id, title, genre, ...posterProps } = props;
  return (
    <a className="movie-card" href="">
      <Poster {...posterProps} />
      <p className="movie-card__title">{title}</p>
      <p className="movie-card__genre">{genre}</p>
    </a>
  );
};
