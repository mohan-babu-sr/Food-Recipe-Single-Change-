import React, { useState, useEffect } from "react";
import classes from "./Body.module.css";
import Monday from "../Days/Monday";
import Tuesday from "../Days/Tuesday";
import Wednesday from "../Days/Wednesday";
import Thursday from "../Days/Thursday";
import Friday from "../Days/Friday";
import Saturday from "../Days/Saturday";
import Sunday from "../Days/Sunday";
// import Ingredients from "../Days/Ingredients";
import IngredientsList from "../GetRecipe/IngredientsList";

const Body = props => {
  return (
    <div className={classes.body}>
      <div className={classes.daydiv}>
        <h1>Monday</h1>
        <Monday />
      </div>

      <div className={classes.daydiv}>
        <h1>Tuesday</h1>
        <Tuesday />
      </div>
      <div className={classes.daydiv}>
        <h1>Wednesday</h1>
        <Wednesday />
      </div>

      <div className={classes.daydiv}>
        <h1>Thursday</h1>
        <Thursday />
      </div>

      <div className={classes.daydiv}>
        <h1>Friday</h1>
        <Friday />
      </div>

      <div className={classes.daydiv}>
        <h1>Saturday</h1>
        <Saturday />
      </div>

      <div className={classes.daydiv}>
        <h1>Sunday</h1>
        <Sunday />
      </div>

      <span className={classes.daydiv}>
        <h1>Ingredients List</h1>
      </span>
      <div className={classes.ingreidents}>
        <IngredientsList />
        {/* <Ingredients sendRecipe={ing} /> */}
      </div>
    </div>
  );
};

export default Body;
