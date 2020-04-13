import { Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchAllRecipes } from "../../../shared/recipesApi";
import RecipeCard from "./RecipeCard/RecipeCard";
import EmptyState from "../../../components/EmptyState/EmptyState";
import recipeNotFound from "../../../assets/images/receipt-not-found.svg";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  emptyState: {
    margin: "auto",
  }
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

  let content;

  if (recipes && recipes.length) {
    content = (
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
  } else {
    content = (
      <EmptyState
        className={classes.emptyState}
        title="Ops!"
        image={recipeNotFound}
        text="Parece que você não tem nenhuma receita cadastrada."
        primaryActionLabel="Adicionar"
        handlePrimaryAction={handlerAdd}
      />
    );
  }

  return content;
};

export default RecipesList;
