import "./SearchBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuSearchLightGray from "../../svg/MenuSearchLightGray";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${searchTerm}`);
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
