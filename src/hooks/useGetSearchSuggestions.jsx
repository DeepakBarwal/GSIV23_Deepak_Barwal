import { useState, useEffect } from "react";
import { getSearchSuggestions } from "../api/axios";

const useGetSearchSuggestions = (keyword, pageNum = 1) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    if (keyword) {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      const controller = new AbortController();
      const { signal } = controller;

      getSearchSuggestions(keyword, pageNum, { signal })
        .then((data) => {
          setResults((prev) => [
            ...prev?.filter((item) =>
              item.original_title.toLowerCase().includes(keyword.toLowerCase())
            ),
            ...data?.results,
          ]);
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
    }
  }, [pageNum, keyword]);

  return { isError, isLoading, error, results, hasNextPage };
};

export default useGetSearchSuggestions;
