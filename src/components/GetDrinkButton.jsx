import React from "react";

function GetDrinkButton({ getRandomCocktail }) {
  return (
    <div className="container btn-container">
      <button
        onClick={() => {
          getRandomCocktail();
        }}
      >
        Get a drink!
      </button>
    </div>
  );
}

export default GetDrinkButton;
