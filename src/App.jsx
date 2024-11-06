import { useEffect, useState } from "react";
import "./css/header.css";
import Header from "./components/Header";
import Drink from "./components/Drink";
import AllPastCocktails from "./components/AllPastCocktails";
import MyFavorites from "./components/MyFavorites";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  const getRandomCocktail = async () => {
    const { data } = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    setData(data);
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
        <Route path="/AllPastCocktails" element={<AllPastCocktails />}></Route>
        <Route path="/MyFavorites" element={<MyFavorites />}></Route>
        <Route path="/NotFound" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
