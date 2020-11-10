import React from "react";
import "./index.css";
import MenuItem from "../MenuItem";

const index = ({ menuCategory, addItemToBasket }) => {
  return (
    <>
      {menuCategory.meals && menuCategory.meals.length > 0 && (
        <div className="menu-category" key={index}>
          <h2>{menuCategory.name}</h2>
          <div>
            {menuCategory.meals.map((meal, index2) => {
              return (
                <MenuItem
                  key={index2}
                  menuItem={meal}
                  addItemToBasket={addItemToBasket}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default index;
