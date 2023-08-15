import "./Header.css";
import SearchBar from "./SearchBar";
import Home from "../svg/Home";

const Header = () => {
  return (
    <div className="header-container">
      <SearchBar className="search-bar" />
      <Home className="home-icon" />
    </div>
  );
};

export default Header;
