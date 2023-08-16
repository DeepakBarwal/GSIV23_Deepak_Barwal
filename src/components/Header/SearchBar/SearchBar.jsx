import "./SearchBar.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MenuSearchLightGray from "../../svg/MenuSearchLightGray";
import { getSearchSuggestions } from "../../../api/axios";
import { cacheResults } from "../../../store/slices/searchSlice";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchCache[searchTerm]) {
        setSuggestions(searchCache[searchTerm]);
      } else {
        try {
          const data = await getSearchSuggestions(searchTerm);
          setSuggestions(data?.results);
          // update cache
          dispatch(
            cacheResults({
              [searchTerm]: data?.results,
            })
          );
        } catch (error) {
          console.error(error);
        }
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [searchTerm, searchCache, dispatch]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  const onSuggestionClick = (e) => {
    setSearchTerm(e.target.textContent.trim());
    setShowSuggestions(false);
    navigate(`/search/${e.target.textContent.trim()}`);
  };

  return (
    <>
      {!isFocused && <MenuSearchLightGray className="search-icon-light" />}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => {
          setIsFocused(true);
          setShowSuggestions(true);
        }}
        onBlur={() => {
          setIsFocused(false);
          // setShowSuggestions(false);
        }}
        placeholder="Search"
        onKeyDown={handleKeyDown}
        {...props}
      />
      {showSuggestions && (
        <div className={`suggestion-container`} onClick={onSuggestionClick}>
          <ul>
            {suggestions.map((suggestion) => (
              <li key={suggestion.id} className="suggestion-list-item">
                <span>{suggestion.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchBar;
