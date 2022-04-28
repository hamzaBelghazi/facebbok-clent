import React from "react";
import Search from "../ui/search/Search";
import Nav from "./Nav";
import Profile from "./Profile";
import logoSrc from "../../assets/facebook-logo.png";

function Hearder() {
  return (
    <header>
      <div className="header_nav--left">
        <a className="logo" href="/">
          <img src={logoSrc} alt="facebook" />
        </a>
        <Search />
      </div>
      <div className="header_nav--middle">
        <Nav />
      </div>
      <div className="header_nav--right">
        <Profile />
      </div>
    </header>
  );
}

export default Hearder;
