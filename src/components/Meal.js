import React from "react";

const Meal = ({ meal }) => {
  return (
    <div className="meal">
      <div>
        <h3>{meal.title}</h3>
        {meal.description && <p>{meal.description}</p>}
        <div>
          {Number(meal.price) && (
            <span className="price">
              {Number(meal.price).toLocaleString("fr-FR", {
                style: "currency",
                currency: "EUR",
              })}
            </span>
          )}

          {meal.popular && (
            <span className="popular">
              <span className="popular-symbol">★ </span>
              <span className="popular-text"> Populaire</span>
            </span>
          )}
        </div>
      </div>
      {meal.picture && <img src={meal.picture} alt="Repas" />}
    </div>
  );
};

export default Meal;
