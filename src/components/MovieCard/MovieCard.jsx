import './MovieCard.css';

export const MovieCard = props => {
  return (
    <a className="movie-card" href="">
      <div>
        <img
          className="movie__poster"
          src="https://image.tmdb.org/t/p/original/qIUFg6tzKeK5bUDguonWCAFceNB.jpg"
          alt=""
        />
        <div className="movie__markers"></div>
      </div>
      <p className="movie__title">Squad</p>
      <p className="movie__genre">Action</p>
    </a>
  );
};
