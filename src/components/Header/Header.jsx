import "./Header.css";
import SearchBar from "./SearchBar";
import Home from "../svg/Home";

const Header = () => {
  return (
    <div className="header-container">
      <SearchBar className="search-bar" />
      <Home />
    </div>
  );
};

export default Header;
