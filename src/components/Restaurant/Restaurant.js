import React from "react";
import "./Restaurant.css";

const Restaurant = ({ restaurant }) => {
  return (
    <div className="restaurant">
      <div>
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
      </div>
      <img src={restaurant.picture} alt="Le restaurant" />
    </div>
  );
};

export default Restaurant;
