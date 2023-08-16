import { useParams } from "react-router-dom";
import CardList from "../components/Card/CardList";
import Header from "../components/Header/Header";
import SearchBar from "../components/Header/SearchBar/SearchBar";
import {
  useGetUpcomingMoviesByPopularityQuery,
  useSearchMovieByNameQuery,
} from "../store/slices/moviesApiSlice";

const ListPage = () => {
  const { keyword } = useParams();
  const { data: movies, loadingUpcomingMovies } =
    useGetUpcomingMoviesByPopularityQuery({
      page: 1,
    });
  const { data: searchResults, isLoading: loadingSearchResults } =
    useSearchMovieByNameQuery({
      searchTerm: keyword,
      page: 1,
    });

  return (
    <div>
      <Header headerComponent={() => <SearchBar className="search-bar" />} />
      {!loadingUpcomingMovies && !keyword && (
        <CardList movies={movies?.results} />
      )}
      {keyword && !loadingSearchResults && (
        <CardList movies={searchResults?.results} />
      )}
    </div>
  );
};

export default ListPage;
