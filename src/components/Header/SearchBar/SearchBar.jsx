import "./SearchBar.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchMovieByNameQuery } from "../../../store/slices/moviesApiSlice";
import { setSearchResults } from "../../../store/slices/searchResultsSlice";
import MenuSearchLightGray from "../../svg/MenuSearchLightGray";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSearchMovieByNameQuery({
    searchTerm,
    page: 1,
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(setSearchResults(data));
      setSearchTerm("");
    }
  };

  return (
    <>
      {!isFocused && <MenuSearchLightGray className="search-icon-light" />}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search"
        onKeyDown={handleKeyDown}
        {...props}
      />
    </>
  );
};

export default SearchBar;
