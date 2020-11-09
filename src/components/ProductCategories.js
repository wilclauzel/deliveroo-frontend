import React from "react";
import Meal from "./Meal";

const ProductCategories = ({ categories }) => {
  return (
    <div className="categories">
      {categories.map((category, index) => {
        return (
          category.meals &&
          category.meals.length > 0 && (
            <div key={index}>
              <h2>{category.name}</h2>
              <div className="meals">
                {category.meals.map((meal, index2) => {
                  return <Meal key={index2} meal={meal} />;
                })}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default ProductCategories;

/*              */
