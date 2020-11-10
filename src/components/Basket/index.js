import React from "react";
import "./index.css";
import BasketItem from "../BasketItem";

const index = ({ basketItems, basketAmount, updateItemQuantity }) => {
  return basketItems.length > 0 ? (
    <div className="basket">
      <button>Valider mon panier</button>
      {basketItems.map((item) => {
        return (
          <BasketItem
            key={item.id}
            item={item}
            updateItemQuantity={updateItemQuantity}
          />
        );
      })}
      <div className="separator" />
      <div className="resume">
        <p>Sous-total</p>
        <p>
          {Number(basketAmount).toLocaleString("fr-FR", {
            style: "currency",
            currency: "EUR",
          })}
        </p>
      </div>
      <div className="resume">
        <p>Frais de livraison</p>
        <p>
          {Number(2.5).toLocaleString("fr-FR", {
            style: "currency",
            currency: "EUR",
          })}
        </p>
      </div>
      <div className="separator" />
      <div className="resume">
        <h4>Total</h4>
        <h4>
          {Number(basketAmount + 2.5).toLocaleString("fr-FR", {
            style: "currency",
            currency: "EUR",
          })}
        </h4>
      </div>
    </div>
  ) : (
    <div className="basket-empty">
      <button>Valider mon panier</button>
      <p>Votre panier est vide</p>
    </div>
  );
};

export default index;
