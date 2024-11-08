import "./css/header.css";
import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Drink from "./components/Drink";
import AllPastCocktails from "./components/AllPastCocktails";
import MyFavorites from "./components/Myfavorites";
import NotFound from "./components/NotFound";
import axios from "axios";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState("");
  const [alert, setAlert] = useState(null);
  const timerRef = useRef(null);

  const getRandomCocktail = async () => {
    const { data } = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    setData(data);
  };

  const showAlert = (a, m) => {
    setAlert({ alert: a, message: m });

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setAlert("");
    }, 5000);
  };

  useEffect(() => {
    getRandomCocktail();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          path="/Drink"
          element={
            <Drink
              data={data}
              getRandomCocktail={getRandomCocktail}
              showAlert={showAlert}
              alert={alert}
            />
          }
        ></Route>
        <Route
          path="/AllPastCocktails"
          element={<AllPastCocktails showAlert={showAlert} alert={alert} />}
        ></Route>
        <Route
          path="/MyFavorites"
          element={<MyFavorites showAlert={showAlert} alert={alert} />}
        ></Route>
        <Route path="/NotFound" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
