import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Restaurant from "./components/Restaurant";
import Header from "./components/Header";
import ProductCategories from "./components/ProductCategories";

const URL = "https://wilclauzel-deliveroo.herokuapp.com/";

const getData = async (setData, setIsLoading) => {
  try {
    const response = await axios.get(URL);
    setData(response.data.data);
    setIsLoading(false);
    console.log(response.data.data);
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
      <ProductCategories categories={data.categories} />
    </div>
  );
}

export default App;
