import { Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import recipeNotFound from "../../../assets/images/receipt-not-found.svg";
import EmptyState from "../../../components/EmptyState/EmptyState";
import { actions as recipeActions } from "../../../reducers/recipe";
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
}));
const RecipesList = ({ items, isLoading, pageLoaded, fetchAllRecipes }) => {
  const [recipes, setRecipes] = useState([]);
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    pageLoaded();
  }, [pageLoaded]);

  useEffect(() => {
    fetchAllRecipes();
  }, [fetchAllRecipes]);

  useEffect(() => {
    if (items) {
      setRecipes(items);
    }
  }, [items]);

  const handlerAdd = () => {
    history.push("/recipes/add");
  };

  let content;

  if (isLoading) {
    content = <></>;
  } else if (recipes && recipes.length) {
    content = (
      <Paper elevation={2} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handlerAdd}>
              Adicionar
            </Button>
          </Grid>
          {recipes.map((recipe) => (
            <Grid key={recipe.id} item xs={12} sm={6} md={4} lg={3}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
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

const mapStateToProps = (state) => ({
  items: state.recipe.get("items").toJS(),
  isLoading: state.loader.get("open"),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(recipeActions, dispatch),
});

RecipesList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  pageLoaded: PropTypes.func.isRequired,
  fetchAllRecipes: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
