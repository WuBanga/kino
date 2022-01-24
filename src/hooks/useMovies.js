import { requestMovies } from '../api/api';
import { useState, useEffect } from 'react';

export const useMovies = (type) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    requestMovies(type)
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
        setIsLoading(false);
      });
  }, [type]);

  return { isLoading, data, isError };
};
