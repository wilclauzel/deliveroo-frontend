import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Restaurant from "./components/Restaurant/Restaurant";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

const URL = "https://wilclauzel-deliveroo.herokuapp.com/";

const getData = async (setData, setIsLoading) => {
  try {
    const response = await axios.get(URL);
    setData(response.data.data);
    setIsLoading(false);
  } catch (error) {
    alert("Les données de la page ne peuvent être chargées");
    console.log(error);
  }
};

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData(setData, setIsLoading);
  }, []);

  return isLoading ? (
    <div>Chargement encours</div>
  ) : (
    <div className="wrapper">
      <Header />
      <Restaurant restaurant={data.restaurant} />
      <Menu menuCategories={data.categories} />
    </div>
  );
}

export default App;
