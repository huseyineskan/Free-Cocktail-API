import axios from "axios";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../css/mycocktails.css";

function MyFavorites() {
  const [allMyFavoritesData, setAllMyFavoritesData] = useState("");

  const getMyFavorites = async () => {
    const data = await axios.get("http://localhost:3000/myfavorites");
    setAllMyFavoritesData(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getMyFavorites();
  }, []);

  return (
    <div className="container all-past-cocktails-container">
      <h2>My Favorites Cocktails</h2>
      <div className="my-cocktails-box">
        {allMyFavoritesData ? (
          allMyFavoritesData.map((drink, i) => (
            <div key={i} className="my-coctail-box">
              <a href="#">
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
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}

export default MyFavorites;
