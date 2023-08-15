import "./Header.css";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="header-container">
      <SearchBar className="search-bar" />
    </div>
  );
};

export default Header;
