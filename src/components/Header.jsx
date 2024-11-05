import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <a href="/">Cocktail</a>
        </div>
        <nav>
          <Link to="/">Get a drink</Link>

          <Link to="/allpostcocktails">All past cocktails</Link>

          <Link to="/mycocktails">My Cocktails</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
