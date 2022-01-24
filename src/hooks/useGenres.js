import { requestGenres } from '../api/api';
import { useState, useEffect } from 'react';

export const useGenres = () => {
  const [isLoadingGenres, setIsLoadingGenres] = useState(true);
  const [genres, setGenres] = useState();
  const [isErrorGenres, setIsErrorGenres] = useState(false);

  useEffect(() => {
    requestGenres()
      .then((result) => {
        setGenres(result);
        setIsLoadingGenres(false);
      })
      .catch((error) => {
        console.error(error);
        setIsErrorGenres(true);
        setIsLoadingGenres(false);
      });
  }, []);

  return { isLoadingGenres, genres, isErrorGenres };
};
