import { useEffect, useState } from "react";
import "./css/button.css";
import "./css/drink.css";
import "./css/header.css";
import Drink from "./components/Drink";
import GetDrinkButton from "./components/GetDrinkButton";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState("");

  const getRandomCocktail = async () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((data) => data.json())
      .then((response) => setData(response));
  };

  useEffect(() => {
    getRandomCocktail();
  }, []);

  return (
    <>
      <Header />
      <GetDrinkButton getRandomCocktail={getRandomCocktail} />
      <Drink data={data} />
    </>
  );
}

export default App;
