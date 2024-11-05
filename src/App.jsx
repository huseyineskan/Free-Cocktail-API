import { useEffect, useState } from "react";
import "./css/header.css";
import Header from "./components/Header";
import Drink from "./components/Drink";
import AllPostCocktails from "./components/AllPostCocktails";
import Mycocktails from "./components/Mycocktails";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Drink data={data} getRandomCocktail={getRandomCocktail} />}
        ></Route>
        <Route path="/AllPostCocktails" element={<AllPostCocktails />}></Route>
        <Route path="/Mycocktails" element={<Mycocktails />}></Route>
        <Route path="/NotFound" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
