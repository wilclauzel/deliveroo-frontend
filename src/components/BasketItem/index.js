import React from "react";
import "./index.css";
const index = ({ item, updateItemQuantity }) => {
  return (
    item.quantity > 0 && (
      <div className="basketItem">
        <button
          onClick={() => {
            updateItemQuantity(item.id, item.quantity - 1);
          }}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => {
            updateItemQuantity(item.id, item.quantity + 1);
          }}
        >
          +
        </button>
        <span>{item.title}</span>
        <span>
          {Number(item.price).toLocaleString("fr-FR", {
            style: "currency",
            currency: "EUR",
          })}
        </span>
      </div>
    )
  );
};

export default index;
