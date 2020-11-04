import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import "./HeaderMain.css";

function HeaderMain() {
  return (
    <div className="header">
      <img className="header__logo" src="./logomovie.png" alt="logo" />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLog">log in</span>
        </div>

        <div className="header__option">
          <span className="header__optionSign">create account</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
