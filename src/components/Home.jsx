import React from "react";
import "../css/mycocktails.css";
import "../css/alert.css";

function Home() {
  return (
    <div className="container home-container">
      <h1>The COCKTAIL</h1>
      <p>
        Welcome to TheCocktailDB API application. With this application, you can
        choose a random cocktail from the API and save it to your favorites.
      </p>
      <div className="basic-message">
        <a href="/drink">Go to Get A Drink!</a>
      </div>
    </div>
  );
}

export default Home;
