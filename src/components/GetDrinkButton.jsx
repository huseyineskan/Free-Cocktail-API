import React from "react";

function GetDrinkButton({ getRandomCocktail }) {
  return (
    <div className="btn">
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
