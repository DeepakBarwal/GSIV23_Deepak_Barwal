import "./SearchBar.css";
import { useState } from "react";
import MenuSearchLightGray from "../svg/MenuSearchLightGray";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

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
        {...props}
      />
    </>
  );
};

export default SearchBar;