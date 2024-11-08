import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../css/drink.css";
import axios from "axios";

function Drink({ data, getRandomCocktail, showAlert, alert }) {
  const saveDrink = async (url = "") => {
    if (!data || !data.drinks || data.drinks.length === 0) {
      return; // Eğer data veya data.drinks yoksa işlemi sonlandır
    }

    const drinkInfos = {
      id: data.drinks[0].idDrink,
      name: data.drinks[0].strDrink,
      img: data.drinks[0].strDrinkThumb,
    };

    drinkInfos.id &&
      (await axios.post(`http://localhost:3000/${url}`, drinkInfos));
  };

  useEffect(() => {
    saveDrink("allpastcocktails");
  }, [data]);

  return (
    <div className="container drink-container">
      <span className={`alert ${alert ? alert.alert : ""}`}>
        {alert ? alert.message : ""}
      </span>
      <div className="btn-box">
        <button
          onClick={() => {
            getRandomCocktail();
            showAlert(
              "success show",
              "A new cocktail has been found and saved."
            );
          }}
        >
          Get a drink!
        </button>
        <button
          className="like-btn"
          title="Save My Cocktails"
          onClick={() => {
            saveDrink("myfavorites");
            showAlert("success show", "Cocktail saved.");
          }}
        >
          Save
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
        </button>
      </div>
      {data ? (
        <>
          {data.drinks.map((drink) => (
            <div className="drink" key={drink.idDrink}>
              <div className="drink-img">
                <LazyLoadImage
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
              </div>
              <div className="drink-infos">
                <ul>
                  <li>
                    <span>Name: </span>
                    {drink.strDrink || "-"}
                  </li>
                  <li>
                    <span>Tag: </span>
                    {drink.strTags || "-"}
                  </li>
                  <li>
                    <span>Category: </span>
                    {drink.strCategory || "-"}
                  </li>
                  <li>
                    <span>Alcoholic: </span>
                    {drink.strAlcoholic || "-"}
                  </li>
                  <li>
                    <span>Glass: </span>
                    {drink.strGlass || "-"}
                  </li>
                  <li>
                    <span>Instructions: </span>
                    {drink.strInstructions || "-"}
                  </li>
                  <li>
                    <span>Ingredience: </span>
                    {drink.strIngredient1 || "-"}
                  </li>
                  <li>
                    <span>Measure: </span>
                    {drink.strMeasure1 || "-"}
                  </li>
                  <li>
                    <span>Date: </span>
                    {drink.dateModified || "-"}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default Drink;
