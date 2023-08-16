import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CardList from "../components/Card/CardList";
import Header from "../components/Header/Header";
import SearchBar from "../components/Header/SearchBar/SearchBar";
import {
  useGetUpcomingMoviesByPopularityQuery,
  useSearchMovieByNameQuery,
} from "../store/slices/moviesApiSlice";

const ListPage = () => {
  const { keyword } = useParams();
  const { data, isLoading } = useGetUpcomingMoviesByPopularityQuery({
    page: 1,
  });
  const { data: searchResults } = useSearchMovieByNameQuery({
    searchTerm: keyword,
    page: 1,
  });

  return (
    <div>
      <Header headerComponent={() => <SearchBar className="search-bar" />} />
      {!isLoading && !keyword && <CardList movies={data?.results} />}
      {keyword && searchResults && <CardList movies={searchResults?.results} />}
    </div>
  );
};

export default ListPage;
