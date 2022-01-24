import { requestMovies } from '../api/api';
import { useState, useEffect } from 'react';

export const useMovies = (props) => {
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  const [movies, setMovies] = useState();
  const [isErrorMovies, setIsError] = useState(false);

  useEffect(() => {
    requestMovies(props)
      .then((result) => {
        setMovies(result);
        setIsLoadingMovies(false);
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
        setIsLoadingMovies(false);
      });
  }, [props]);

  return { isLoadingMovies, movies, isErrorMovies };
};
