import React, { useState } from "react";
import GetCard from "./GetCard";
import classes from "./GetRecipe.module.css";

const recipeData = [];
const GetRecipe = () => {
  const [rescipeDetail, setRescipeDetail] = useState([]);
  const fetchHandler = async () => {
    const req = await fetch(
      `https://forkify-fb32c-default-rtdb.firebaseio.com/dill.json`
    );

    const res = await req.json();
    let i = 0,
      j = 0;
    for (i in res) {
      // console.log(res[i].id, res[i].title, res[i].publisher, res[i].image_url);
      if (j === 3) {
        return;
      } else {
        j++;

        recipeData.push(res[i]);
        setRescipeDetail(res[i]);
      }
    }
    // console.log(recipeData);
  };

  const recipeList = recipeData.map(data => {
    return (
      <GetCard
        id={data.id}
        title={data.title}
        image_url={data.image_url}
        publisher={data.publisher}
      />
    );
  });
  // const recipeList = recipeData.map(data => {
  //   return (
  //     <div>
  //       <div>ID : {rescipeDetail.id}</div>
  //       <div>Title : {rescipeDetail.title}</div>
  //       <div>Image : {rescipeDetail.image_url}</div>
  //       <div>Publisher : {rescipeDetail.publisher}</div>
  //       <div>------------------------------------</div>
  //     </div>
  //   );
  // });
  // fetchHandler();

  return (
    <div className='container'>
      <button className={classes.button} onClick={fetchHandler}>
        Get Recipe
      </button>
      {recipeList !== [] ? <h2>{recipeList}</h2> : "No Meals Found..!"}

      {/* <div>ID : {rescipeDetail.id}</div>
      <div>Title : {rescipeDetail.title}</div>
      <div>Image : {rescipeDetail.image_url}</div>
      <div>Publisher : {rescipeDetail.publisher}</div> */}
    </div>
  );
};

export default GetRecipe;
