import { requestMovies } from '../api/api';
import { useState, useEffect } from 'react';

export const useMovies = (type) => {
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  const [movies, setMovies] = useState();
  const [isErrorMovies, setIsError] = useState(false);

  useEffect(() => {
    requestMovies(type)
      .then((result) => {
        setMovies(result);
        setIsLoadingMovies(false);
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
        setIsLoadingMovies(false);
      });
  }, [type]);

  return { isLoadingMovies, movies, isErrorMovies };
};
