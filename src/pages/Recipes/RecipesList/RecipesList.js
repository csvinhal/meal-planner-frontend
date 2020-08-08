import { Button, Fab, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import recipeNotFound from "../../../assets/images/recipe-not-found.svg";
import EmptyState from "../../../components/EmptyState/EmptyState";
import Header from "../../../components/Header/Header";
import { actions as loaderActions } from "../../../reducers/loading";
import { actions as toastActions } from "../../../reducers/toast";
import { openDialog } from "../../../services/dialogService";
import { deleteRecipe, getRecipes } from "../../../shared/recipesApi";
import RecipeCard from "./RecipeCard/RecipeCard";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  emptyState: {
    margin: "auto",
  },
  button: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  fabButton: {
    position: "fixed",
    right: theme.spacing(2),
    bottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const fetchRecipes = useCallback(async () => {
    dispatch(loaderActions.showLoader());
    const { data } = await getRecipes();
    setRecipes(data);
    dispatch(loaderActions.closeLoader());
  }, [dispatch]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  const handlerAdd = useCallback(() => {
    history.push("/recipes/add");
  }, [history]);

  const handleRemove = useCallback(
    async (id) => {
      const confirmed = await openDialog();
      if (confirmed) {
        dispatch(loaderActions.showLoader());
        await deleteRecipe(id);
        dispatch(
          toastActions.showMessage({
            severity: "success",
            message: "Receita deletada com sucesso!",
          })
        );
        await fetchRecipes();
        dispatch(loaderActions.closeLoader());
      }
    },
    [fetchRecipes, dispatch]
  );

  let content;

  if (recipes && recipes.length) {
    content = (
      <>
        <Header title="Receitas" />
        <Paper elevation={2} className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handlerAdd}
              >
                Adicionar
              </Button>
            </Grid>
            {recipes.map((recipe) => (
              <Grid key={recipe._id} item xs={12} sm={6} md={4} lg={3}>
                <RecipeCard
                  recipe={recipe}
                  handleRemove={() => handleRemove(recipe._id)}
                />
              </Grid>
            ))}
            <Fab
              className={classes.fabButton}
              color="primary"
              aria-label="add"
              onClick={handlerAdd}
            >
              <AddIcon />
            </Fab>
          </Grid>
        </Paper>
      </>
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

  return <Fragment>{content}</Fragment>;
};

RecipesList.propTypes = {};

export default RecipesList;
