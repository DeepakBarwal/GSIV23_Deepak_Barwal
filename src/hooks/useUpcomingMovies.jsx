import { useState, useEffect } from "react";
import { getUpcomingMovies } from "../api/axios";

const useUpcomingMovies = (pageNum = 1) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    const controller = new AbortController();
    const { signal } = controller;

    getUpcomingMovies(pageNum, { signal })
      .then((data) => {
        setResults((prev) => [...prev, ...data?.results]);
        setHasNextPage(Boolean(data?.total_pages > data?.page));
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        if (signal.aborted) return;
        setIsError(true);
        setError({ message: e.message });
      });

    return () => controller.abort();
  }, [pageNum]);

  return { isError, isLoading, error, results, hasNextPage };
};

export default useUpcomingMovies;
