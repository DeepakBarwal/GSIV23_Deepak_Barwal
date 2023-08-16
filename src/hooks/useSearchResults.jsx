import { useState, useEffect, useRef } from "react";
import { getSearchResults } from "../api/axios";

const useSearchResults = (keyword, pageNum = 1) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const prevSearchTerm = useRef(null);

  useEffect(() => {
    if (keyword) {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      const controller = new AbortController();
      const { signal } = controller;

      getSearchResults(keyword, pageNum, { signal })
        .then((data) => {
          prevSearchTerm.current = keyword;
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

export default useSearchResults;
