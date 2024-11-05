import React from "react";

function Header() {
  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <a href="/">Cocktail</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Get a drink</a>
            </li>
            <li>
              <a href="#">My List</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
