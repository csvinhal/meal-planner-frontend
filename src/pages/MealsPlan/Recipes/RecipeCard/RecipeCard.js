import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import imageNotFound from "../../../../assets/images/image-not-found.svg";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      marginTop: theme.spacing(1),
      marginRight: "auto",
      marginLeft: "auto",
    },
    media: {
      height: 100,
      backgroundColor: theme.palette.background.default,
      backgroundPosition: "bottom center",
      backgroundSize: "contain",
    },
  })
);

const RecipeCard = ({ recipe }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageNotFound}
          title={`Receita de ${recipe.recipeName}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {recipe.recipeName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string,
    recipeName: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default RecipeCard;
