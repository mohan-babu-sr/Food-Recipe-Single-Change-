import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ingclasses from "./IngredientsList.module.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

// ingredients.forEach(element => {
//   ingArray.push(element);
// });

// const listArray = ingArray.map(JSON.stringify);
// console.log(listArray);

// let unique = new Set(listArray);
// console.log(unique);
// let uniqueArray = Array.from(unique).map(JSON.parse);
// console.log(uniqueArray);

// ingredients.map(data => {
//   // console.log(data.description);

//   let checkRecipe = {};
//   let description = checkRecipe[data.description];
//   let quantity = 0;
//   if (checkRecipe[data.description] == undefined) {
//     checkRecipe[data.description] = data.quantity;
//     quantity = data.quantity;
//     console.log("if ");
//   } else {
//     console.log("else");
//     quantity = checkRecipe[data.description] + data.quantity;
//     checkRecipe[data.description] = quantity;
//   }
//   // console.log(checkRecipe);
//   // ingArray.push(data);
// });

// console.log(ingredients);

// Pushing to one array
// ingredients.map(data => {
//   empty.push(data);
// });
// console.log("empty", empty);

// Duplicate Check
// const unique = Array.from(
//   ingredients.reduce((map, obj) => map.set(obj.id, obj), new Map()).values()
//   );
//   console.log("unique", unique);
let ca = [];

const IngredientsList = ({ ingredients }) => {
  const [change, setChange] = useState(false);
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState();
  const [unit, setUnit] = useState();

  let ing = [];
  const ingfetch = async () => {
    const req = await fetch(
      `https://forkify-ingredients-default-rtdb.firebaseio.com/ingredients.json`
    );

    const res = await req.json();

    let i = 0;
    for (i in res) {
      ing.push(res[i].ingredients);
    }
    changeHandler();
  };
  ingfetch();

  const changeHandler = () => {
    ing.map((data, idx) => {
      console.log("map", data);
      data.map((ingredient, idx) => {
        setDescription(ingredient.description);
        setQuantity(ingredient.quantity);
        setUnit(ingredient.unit);
        console.log("ingredient", ingredient);
        // return <div> Description - {ingredient.description}</div>;
      });
    });
    setChange(true);
    // console.log("checker");
  };

  return (
    <div> Description </div>
    // <div
    //   className={ingclasses.main}
    //   onClick={changeHandler}
    //   key={uuidv4()}
    //   id={uuidv4()}
    // >

    //   <List>
    //     <ListItem alignItems='flex-start'>
    //       <div>
    //         {change && (
    //           <input
    //             type='checkbox'
    //             value={description}
    //             className={ingclasses.checkbox}
    //           />
    //         )}
    //       </div>
    //       <label>
    //         <ListItemText
    //           for={description}
    //           className={ingclasses.listdiv}
    //           primary={description}
    //           secondary={
    //             <React.Fragment>
    //               <Typography
    //                 component='span'
    //                 variant='body2'
    //                 color='textPrimary'
    //               >
    //                 {quantity ? quantity : "0"}
    //               </Typography>
    //               {unit}
    //             </React.Fragment>
    //           }
    //         />
    //       </label>
    //     </ListItem>
    //   </List>
    // </div>
  );
};

export default IngredientsList;
