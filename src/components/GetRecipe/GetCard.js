import React, { useState, useEffect } from "react";
import RecipeDetails from "./RecipeDetails";
import ViewListIcon from "@material-ui/icons/ViewList";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import Spinner from "../Spinner/circular";
import classes from "./GetCard.module.css";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import VisibilityIcon from "@material-ui/icons/Visibility";
import pop from "../Days/RecipePopup.module.css";
import PopupIngredient from "../GetRecipe/PopupIngredient";
import Table from "react-bootstrap/Table";

import Avatar from "@material-ui/core/Avatar";
import { Skeleton } from "@material-ui/lab";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import LinkIcon from "@material-ui/icons/Link";
const firebase = " https://forkify-ingredients-default-rtdb.firebaseio.com/";

let ingpush = [];
const GetCard = props => {
  const recipeData = [];
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [source, setSource] = useState();
  const [publisher, setPublisher] = useState();
  const [ingredients, setIngredients] = useState();
  const [state, setState] = useState(props.loaded);
  const [show, setShow] = useState(false);
  const { loading = false } = props;

  const fetchHandler = async () => {
    setTitle();
    setImage();
    const req = await fetch(
      `https://forkify-fb32c-default-rtdb.firebaseio.com/${props.recipe}.json`
    );

    const res = await req.json();

    let i = 0;
    for (i in res) {
      recipeData.push(res[i]);
    }
    let rad = Math.floor(Math.random() * recipeData.length);

    for (let i = 0; i < 1; i++) {
      const str = recipeData[rad].title;
      const val = str.replace("&amp;", "&");
      setTitle(val);
      setImage(recipeData[rad].image_url);
      setSource(recipeData[rad].source_url);
      setPublisher(recipeData[rad].publisher);
      setIngredients(recipeData[rad].ingredients);
      ingpush.push(recipeData[rad]);
      // fetch(`${firebase}/ingredients.json`, {
      //   method: "POST",
      //   body: JSON.stringify(recipeData[rad]),
      // });
    }
  };

  // console.log(ingpush);

  useEffect(() => {
    fetchHandler();
    setTimeout(() => {
      setState(true);
    }, 1000);
  }, []);

  return (
    <div>
      <div className={classes.load}>
        {state && (
          <div className={classes.recipe}>
            <h2>{title}</h2>
            <img src={image} alt='' />
            <div className={classes.iconsdiv}>
              <span className={classes.icons}>
                <PopupState
                  width={40}
                  variant='popover'
                  popupId='demo-popup-popover'
                  className={pop.box}
                >
                  {popupState => (
                    <div className={pop.popovericon}>
                      <VisibilityIcon
                        variant='contained'
                        {...bindTrigger(popupState)}
                      />

                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                      >
                        <Box p={2} width={500}>
                          <Typography>
                            <Box>
                              <Card margin={1}>
                                <CardHeader
                                  avatar={
                                    loading ? (
                                      <Skeleton
                                        animation='wave'
                                        variant='circle'
                                        width={40}
                                        height={40}
                                      />
                                    ) : (
                                      <Avatar alt={title} src={image} />
                                    )
                                  }
                                  action={
                                    loading ? null : (
                                      <a
                                        href={source}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                      >
                                        <IconButton aria-label='link'>
                                          <LinkIcon />
                                        </IconButton>
                                      </a>
                                    )
                                  }
                                  title={
                                    loading ? (
                                      <Skeleton
                                        animation='wave'
                                        height={10}
                                        width='80%'
                                        style={{ marginBottom: 6 }}
                                      />
                                    ) : (
                                      title
                                    )
                                  }
                                  subheader={
                                    loading ? (
                                      <Skeleton
                                        animation='wave'
                                        height={10}
                                        width='40%'
                                      />
                                    ) : (
                                      publisher
                                    )
                                  }
                                />
                              </Card>
                            </Box>

                            <div className={pop.root}>
                              <br></br>
                              <div className={pop.ingredients}>
                                <h3>Ingredients List :</h3>
                                <Table variant='info'>
                                  <PopupIngredient ingredients={ingredients} />
                                </Table>
                              </div>
                            </div>
                          </Typography>
                        </Box>
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </span>
              {/* <span className={classes.icons}>
                <ViewListIcon onClick={() => setShow(!show)} />
              </span> */}
              <span className={classes.icons}>
                <RotateLeftIcon onClick={fetchHandler} />
              </span>
            </div>
            <div className={classes.ulscroll}>
              {show && <RecipeDetails ingredients={ingpush} />}
            </div>
          </div>
        )}
        {!state && <Spinner className={classes.spinner} />}
      </div>
    </div>
  );
};

export default GetCard;
