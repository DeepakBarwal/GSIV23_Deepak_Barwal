import { useParams } from "react-router-dom";
import CardList from "../components/Card/CardList";
import Header from "../components/Header/Header";
import SearchBar from "../components/Header/SearchBar/SearchBar";

const ListPage = () => {
  const { keyword } = useParams();

  return (
    <div>
      <Header headerComponent={() => <SearchBar className="search-bar" />} />
      <CardList keyword={keyword} />
      {/* {keyword && !loadingSearchResults && <CardList movies={searchData} />} */}
    </div>
  );
};

export default ListPage;
