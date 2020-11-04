import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav_logo">
          <Link to="/">
            <img className="header__logo" src="./bikefindr.png" alt="logo" />
          </Link>
        </div>
        <div className="spacer"></div>
        <div className="header__nav__options">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="log">log in</div>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="sign">create account</div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
