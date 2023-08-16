import "./CardList.css";

import { useState, useRef, useCallback } from "react";
import Card from "./Card";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import useSearchResults from "../../hooks/useSearchResults";

const CardList = ({ keyword }) => {
  const [pageNumMovie, setPageNumMovie] = useState(1);
  const [pageNumSearch, setPageNumSearch] = useState(1);
  const {
    isLoading: loadingUpcomingMovies,
    isError: isErrorUpcomingMovie,
    error: errorUpcomingMovie,
    results: moviesData,
    hasNextPage: hasNextPageMovie,
  } = useUpcomingMovies(pageNumMovie);
  const {
    isLoading: loadingSearchResults,
    isError: isErrorSearchResults,
    error: errorSearchResults,
    results: searchResults,
    hasNextPage: hasNextPageSearch,
  } = useSearchResults(keyword, pageNumSearch);

  const intObserver = useRef();
  const lastMovieRef = useCallback(
    (movie) => {
      if (keyword) {
        if (loadingSearchResults) return;

        if (intObserver.current) intObserver.current.disconnect();

        intObserver.current = new IntersectionObserver((movies) => {
          if (movies[0].isIntersecting && hasNextPageSearch) {
            // console.log("near the last search movie");
            setPageNumSearch((prev) => prev + 1);
          }
        });

        if (movie) intObserver.current.observe(movie);
      } else {
        if (loadingUpcomingMovies) return;

        if (intObserver.current) intObserver.current.disconnect();

        intObserver.current = new IntersectionObserver((movies) => {
          if (movies[0].isIntersecting && hasNextPageMovie) {
            // console.log("near the last movie");
            setPageNumMovie((prev) => prev + 1);
          }
        });

        if (movie) intObserver.current.observe(movie);
      }
    },
    [
      loadingUpcomingMovies,
      hasNextPageMovie,
      hasNextPageSearch,
      loadingSearchResults,
      keyword,
    ]
  );

  // if (loadingUpcomingMovies) return <p>Loading Upcoming Movies...</p>;

  if (isErrorUpcomingMovie) return <p>Error: {errorUpcomingMovie.message}</p>;
  if (isErrorSearchResults) return <p>Error: {errorSearchResults.message}</p>;

  const content = !keyword ? (
    moviesData?.map((item, i) => {
      if (moviesData?.length === i + 1) {
        return <Card ref={lastMovieRef} key={item.id} movie={item} />;
      }
      return <Card key={item.id} movie={item} />;
    })
  ) : searchResults?.length === 0 ? (
    <h1>No movie found with that name</h1>
  ) : (
    searchResults?.map((item, i) => {
      if (searchResults?.length === i + 1) {
        return <Card ref={lastMovieRef} key={item.id} movie={item} />;
      }
      return <Card key={item.id} movie={item} />;
    })
  );

  return <div className="card-list">{content}</div>;
};

export default CardList;
