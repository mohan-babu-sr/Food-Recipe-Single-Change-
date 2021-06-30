import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GetRecipe from "../GetRecipe/GetRecipe";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  // const [recipedetails, setRecipedetails] = useState();
  const classes = useStyles();
  // recipeData.push(props.onRecipes);
  console.log(props.image);
  console.log("image");
  // setRecipedetails(props.onRecipes);
  console.log(props.onRecipes);

  return (
    // {recipedetails.forEach(data=>{

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt={props.onRecipes.title}
          height='140'
          image={props.onRecipes.image_url}
          title={props.onRecipes.title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.onRecipes.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    // })}
  );
}
