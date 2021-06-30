import React from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "./PopupIngredient.module.css";
import Table from "react-bootstrap/Table";

const PopupIngredient = ({ ingredients }) => {
  return ingredients.map(ingredient => {
    let quantity = ingredient.quantity;
    return (
      <div>
        <Table variant='info'>
          <tbody>
            <tr>
              <td className={classes.cap}>
                {ingredient.description} -{" "}
                {ingredient.quantity > 0 ? ingredient.quantity : "0"}{" "}
                {ingredient.unit}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  });
};

export default PopupIngredient;
