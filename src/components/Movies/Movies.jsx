import { MovieList } from '../MovieList/MovieList';
import { Pagination } from '../Pagination/Pagination';
import { useGenres } from '../../hooks/useGenres';
import { useMovies } from '../../hooks/useMovies';
import { useEffect, useMemo, useRef, useState } from 'react';

const path = 'https://image.tmdb.org/t/p/original';
export const Movies = () => {
  const sectionRef = useRef(null);
  const [page, setPage] = useState(1);
  const moviesOptions = useMemo(() => {
    return {
      type: 'popular',
      page: page,
    };
  }, [page]);
  const { isLoadingGenres, genres, isErrorGenres } = useGenres();
  const { isLoadingMovies, movies, isErrorMovies } = useMovies(moviesOptions);

  useEffect(() => {
    sectionRef.current?.scrollIntoView();
  }, [page]);

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
      const genre = genres.genres.find(
        (genre) => genre.id === movie.genre_ids[0]
      );

      return {
        id: movie.id,
        title: movie.title,
        genre: genre ? capitalize(genre.name) : '',
        posterLink: movie.poster_path
          ? `${path}${movie.poster_path}`
          : undefined,
        adult: movie.adult,
        rating: movie.vote_average,
      };
    });
  }, [isLoadingGenres, genres, isLoadingMovies, movies]);

  if (isErrorMovies || isErrorGenres) {
    return <h1>Error</h1>;
  }

  return (
    <section ref={sectionRef} className="movies">
      <MovieList data={data} isLoading={isLoadingGenres || isLoadingMovies} />
      <Pagination
        totalPages={movies?.total_pages}
        page={page}
        onPageChange={setPage}
      />
    </section>
  );
};

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
