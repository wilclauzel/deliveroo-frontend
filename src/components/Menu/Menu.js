import React, { useState } from "react";
import MenuCategory from "../MenuCategory";
import Basket from "../Basket";
import "./Menu.css";

const Menu = ({ menuCategories }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [basketAmount, setBasketAmount] = useState(0);

  const addItemToBasket = (menuItem) => {
    const newTab = [...basketItems];

    const pos = newTab.findIndex((item) => {
      return item.id === menuItem.id;
    });
    if (pos === -1) {
      newTab.push({
        id: menuItem.id,
        title: menuItem.title,
        price: menuItem.price,
        quantity: 1,
      });
    } else {
      const newQty = newTab[pos].quantity + 1;
      newTab.splice(pos, 1, {
        id: menuItem.id,
        title: menuItem.title,
        price: menuItem.price,
        quantity: newQty,
      });
    }
    setBasketItems(newTab);
    setBasketAmount(Number(basketAmount) + Number(menuItem.price));
  };

  const updateItemQuantity = (menuItemId, quantity) => {
    let amount = Number(basketAmount);
    const newTab = [...basketItems];

    const pos = newTab.findIndex((item) => {
      return item.id === menuItemId;
    });
    if (pos === -1) {
      return;
    }

    amount -= Number(newTab[pos].quantity) * Number(newTab[pos].price);

    if (quantity > 0) {
      amount += Number(quantity) * Number(newTab[pos].price);
      const newItem = { ...newTab[pos], quantity };
      newTab.splice(pos, 1, newItem);
    } else {
      newTab.splice(pos, 1);
    }

    setBasketItems(newTab);
    setBasketAmount(amount);
  };

  return (
    <div className="menu">
      <div>
        <div>
          <div className="basket-small">
            <Basket
              basketItems={basketItems}
              basketAmount={basketAmount}
              updateItemQuantity={updateItemQuantity}
            />
          </div>
          {menuCategories.map((category, index) => {
            return (
              <MenuCategory
                key={index}
                menuCategory={category}
                addItemToBasket={addItemToBasket}
              />
            );
          })}
        </div>
        <div className="basket-std">
          <Basket
            basketItems={basketItems}
            basketAmount={basketAmount}
            updateItemQuantity={updateItemQuantity}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
