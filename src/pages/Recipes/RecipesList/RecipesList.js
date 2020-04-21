import { Button, Grid, Paper, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import recipeNotFound from "../../../assets/images/receipt-not-found.svg";
import DeleteDialog from "../../../components/DeleteDialog/DeleteDialog";
import EmptyState from "../../../components/EmptyState/EmptyState";
import { actions as recipeActions } from "../../../reducers/recipe";
import AddIcon from "@material-ui/icons/Add";
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
const RecipesList = ({
  items,
  isLoading,
  pageLoaded,
  fetchAllRecipes,
  deleteRecipe,
}) => {
  const [recipes, setRecipes] = useState([]);
  const [open, setOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
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

  const handleRemove = (id) => {
    setIdToDelete(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIdToDelete(null);
  };

  const handleConfirm = () => {
    setOpen(false);
    deleteRecipe({ id: idToDelete, history });
    setIdToDelete(null);
  };

  let content;

  if (isLoading) {
    content = <></>;
  } else if (recipes && recipes.length) {
    content = (
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
            <Grid key={recipe.id} item xs={12} sm={6} md={4} lg={3}>
              <RecipeCard recipe={recipe} handleRemove={handleRemove} />
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

  return (
    <div>
      <DeleteDialog
        open={open}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
      ></DeleteDialog>
      {content}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.recipe.get("items").toJS(),
  isLoading: state.loader.get("open"),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(recipeActions, dispatch),
});

RecipesList.propTypes = {
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  pageLoaded: PropTypes.func.isRequired,
  fetchAllRecipes: PropTypes.func.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
