import React from "react";

function Drink({ data }) {
  return (
    <>
      {data ? (
        <>
          {data.drinks.map((drink) => (
            <div className="drink" key={drink.idDrink}>
              <div className="drink-img">
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
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
    </>
  );
}

export default Drink;
