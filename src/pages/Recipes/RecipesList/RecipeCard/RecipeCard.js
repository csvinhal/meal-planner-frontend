import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import PropTypes from "prop-types";
import imageNotFound from "../../../../assets/images/image-not-found.svg";
import { useHistory, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: "auto",
    },
    media: {
      height: 140,
      backgroundColor: theme.palette.background.default,
      backgroundPosition: "bottom center",
      backgroundSize: "contain",
    },
  })
);

const RecipeCard = ({ recipe, handleRemove }) => {
  const classes = useStyles();
  const { path } = useRouteMatch();
  const history = useHistory();

  const handleEdit = () => {
    history.push(`${path}/${recipe.id}`);
  };

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
          <Typography variant="body2" color="textSecondary" component="p">
            {recipe.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleEdit}>
          Editar
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => handleRemove(recipe.id)}
        >
          Remover
        </Button>
      </CardActions>
    </Card>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string,
    recipeName: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }),
  handleRemove: PropTypes.func.isRequired,
};

export default RecipeCard;
