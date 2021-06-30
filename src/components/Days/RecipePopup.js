import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import VisibilityIcon from "@material-ui/icons/Visibility";
import classes from "./RecipePopup.module.css";
import PopupIngredient from "../GetRecipe/PopupIngredient";
import Table from "react-bootstrap/Table";

import Avatar from "@material-ui/core/Avatar";
// import Skeleton from "@material-ui/lab/Skeleton";
import { Skeleton } from "@material-ui/lab";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import LinkIcon from "@material-ui/icons/Link";
// let i = 0;
export default function PopoverPopupState(props) {
  // i++;
  let value;
  const [title, setTitle] = useState(value);
  const [publisher, setPublisher] = useState(props.ingredients.publisher);
  console.log(props);
  props.ingredients.map(data => {
    // setTitle(data.title);
    value = data.title;
  });

  const { loading = false } = props;

  return (
    <PopupState
      width={40}
      variant='popover'
      popupId='demo-popup-popover'
      className={classes.box}
    >
      {popupState => (
        <div className={classes.popovericon}>
          <VisibilityIcon variant='contained' {...bindTrigger(popupState)} />

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
                          <Avatar
                            alt={props.ingredients.title}
                            src={props.ingredients.image}
                          />
                        )
                      }
                      action={
                        loading ? null : (
                          <a
                            href={props.ingredients.source}
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
                          value
                        )
                      }
                      subheader={
                        loading ? (
                          <Skeleton animation='wave' height={10} width='40%' />
                        ) : (
                          publisher
                        )
                      }
                    />
                  </Card>
                </Box>

                <div className={classes.root}>
                  <br></br>
                  <div className={classes.ingredients}>
                    <Table variant='info'>
                      <thead>
                        <tr>
                          <th>Ingredients</th>
                          {/* <th>Quantity</th> */}
                        </tr>
                      </thead>
                      {/* <PopupIngredient
                        ingredients={props.ingredients.ingredients}
                      /> */}
                    </Table>
                  </div>
                </div>
              </Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
