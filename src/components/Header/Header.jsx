import "./Header.css";
import { Link } from "react-router-dom";
import Home from "../svg/Home";

const Header = ({ headerComponent }) => {
  return (
    <div className="header-container">
      {headerComponent()}

      <Link to="/">
        <Home className="home-icon" />
      </Link>
    </div>
  );
};

export default Header;
