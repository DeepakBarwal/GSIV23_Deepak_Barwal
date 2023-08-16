import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../components/Card/CardList";
import Header from "../components/Header/Header";
import SearchBar from "../components/Header/SearchBar/SearchBar";
import {
  addMovies,
  addSearchMovies,
  incrementPage,
} from "../store/slices/moviesListSlice";

const ListPage = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();

  return (
    <div>
      <Header headerComponent={() => <SearchBar className="search-bar" />} />
      <CardList keyword={keyword} />
      {/* {keyword && !loadingSearchResults && <CardList movies={searchData} />} */}
    </div>
  );
};

export default ListPage;
