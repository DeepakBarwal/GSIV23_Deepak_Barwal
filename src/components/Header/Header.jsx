import "./Header.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Home from "../svg/Home";

const Header = () => {
  return (
    <div className="header-container">
      <SearchBar className="search-bar" />
      <Link to="/">
        <Home className="home-icon" />
      </Link>
    </div>
  );
};

export default Header;
