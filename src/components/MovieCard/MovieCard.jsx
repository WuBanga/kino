import './MovieCard.css';

export const MovieCard = props => {
  return (
    <a className="movie-card" href="">
      <div>
        <img
          className="movie-card__poster"
          src="https://image.tmdb.org/t/p/original/qIUFg6tzKeK5bUDguonWCAFceNB.jpg"
          alt=""
        />
        <div className="movie-card__markers"></div>
      </div>
      <p className="movie-card__title">Squad</p>
      <p className="movie-card__genre">Action</p>
    </a>
  );
};
