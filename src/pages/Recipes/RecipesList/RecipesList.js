import { Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchAllRecipes } from "../../../shared/recipesApi";
import RecipeCard from "./RecipeCard/RecipeCard";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [offset, setOffset] = useState(0);
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    fetchAllRecipes(10, offset).then((response) => {
      const { data } = response;
      setRecipes((p) => [...p, ...data.results]);
    });
  }, [offset]);

  const handlerAdd = () => {
    history.push("/recipes/add");
  };

  return (
    <Paper elevation={2} className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handlerAdd}>
            Adicionar
          </Button>
        </Grid>
        <Grid item xs={4}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RecipesList;
