import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Drink({ data }) {
  return (
    <div className="container drink-container">
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
