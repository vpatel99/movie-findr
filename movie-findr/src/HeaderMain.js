import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import "./HeaderMain.css";

function HeaderMain() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="./logomovie.png" alt="logo" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="login">
          <div className="header__option">
            <span className="header__optionLog">log in</span>
          </div>
        </Link>
        <Link to="signup">
          <div className="header__option">
            <span className="header__optionSign">create account</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HeaderMain;
