import React from "react";
import "./index.css";

const MenuItem = ({ menuItem, addItemToBasket }) => {
  const handleToAddToBasket = () => {
    addItemToBasket(menuItem);
  };
  return (
    <div className="menuItem" onClick={handleToAddToBasket}>
      <div>
        <h3>{menuItem.title}</h3>
        {menuItem.description && <p>{menuItem.description}</p>}
        <div>
          {Number(menuItem.price) && (
            <span className="price">
              {Number(menuItem.price).toLocaleString("fr-FR", {
                style: "currency",
                currency: "EUR",
              })}
            </span>
          )}

          {menuItem.popular && (
            <span className="popular">
              <span className="popular-symbol">★ </span>
              <span className="popular-text"> Populaire</span>
            </span>
          )}
        </div>
      </div>
      {menuItem.picture && <img src={menuItem.picture} alt="Repas" />}
    </div>
  );
};

export default MenuItem;
