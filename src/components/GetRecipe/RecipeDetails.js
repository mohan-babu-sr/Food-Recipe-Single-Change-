import React from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "./RecipeDetails.module.css";

const RecipeDetails = ({ ingredients }) => {
  // console.log(ingredients);
  return ingredients.map(ingredient => {
    return (
      <ul key={uuidv4()} className={classes.ingredientlist}>
        <li className={classes.ingredienttext}>{ingredient.description}</li>
        <li className={classes.ingredientweight}>
          Quantity - {ingredient.quantity ? ingredient.quantity : "0"}
        </li>
      </ul>
    );
  });
};

export default RecipeDetails;
