import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import "../css/mycocktails.css";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <a href="/">Cocktail</a>
        </div>
        <div
          className="mobile-menu"
          onClick={() =>
            menuActive ? setMenuActive(false) : setMenuActive(true)
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`${menuActive ? "active" : ""}`}>
          <Link onClick={() => setMenuActive(false)} to="/">
            Home
          </Link>

          <Link onClick={() => setMenuActive(false)} to="/drink">
            Get a drink
          </Link>

          <Link onClick={() => setMenuActive(false)} to="/allpastcocktails">
            All past cocktails
          </Link>

          <Link onClick={() => setMenuActive(false)} to="/myfavorites">
            My Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
