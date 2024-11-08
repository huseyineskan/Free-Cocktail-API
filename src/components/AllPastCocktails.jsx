import axios from "axios";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../css/mycocktails.css";

function AllPastCocktails({ showAlert, alert }) {
  const [allPastCocktailsData, setAllPastCocktailsData] = useState("");

  const getAllPastCocktails = async () => {
    const data = await axios.get("http://localhost:3000/allpastcocktails");
    setAllPastCocktailsData(data.data);
  };

  const deleteCocktail = async (deleteId = false) => {
    if (deleteId) {
      await axios.delete(`http://localhost:3000/allpastcocktails/${deleteId}`);
    } else {
      try {
        await allPastCocktailsData.map(async (cocktail) => {
          await axios.delete(
            `http://localhost:3000/allpastcocktails/${cocktail.id}`
          );
        });
      } catch (error) {
        console.log(`Error ${cocktail.id}-`, error);
      }
    }
  };

  useEffect(() => {
    getAllPastCocktails();
  }, [deleteCocktail]);

  return (
    <div className="container all-past-cocktails-container">
      <span className={`alert ${alert ? alert.alert : ""}`}>
        {alert ? alert.message : ""}
      </span>
      <h2>
        All Past Cocktails{" "}
        <div
          className="delete-all-cocktails"
          onClick={() => {
            deleteCocktail();
            showAlert("danger show", "All cocktails have been deleted.");
          }}
        >
          Clear entire list
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
          </svg>
        </div>
      </h2>
      <div className="my-cocktails-box">
        {allPastCocktailsData ? (
          allPastCocktailsData.length > 0 ? (
            allPastCocktailsData.map((drink, i) => (
              <div key={i} className="my-coctail-box" title={drink.name}>
                <div
                  className="delete-cocktail"
                  onClick={() => {
                    deleteCocktail(drink.id);
                    showAlert("danger show", `${drink.name} deleted.`);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                  </svg>
                </div>
                <a
                  target="_blank"
                  href={`https://www.thecocktaildb.com/drink/${drink.id}-${drink.name}`}
                >
                  <LazyLoadImage
                    src={drink.img}
                    alt={drink.name}
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                  />
                  <p>{drink.name}</p>
                </a>
              </div>
            ))
          ) : (
            <div className="basic-message">
              <p>Not found coctail.</p>
              <a href="/">Go to Get A Drink!</a>
            </div>
          )
        ) : (
          <div className="basic-message">
            <p>loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllPastCocktails;
