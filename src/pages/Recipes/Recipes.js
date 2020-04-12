import React from "react";
import { Switch, useRouteMatch } from "react-router-dom";
import Layout from "../../hoc/Layout";
import PrivateRoute from "../../hoc/PrivateRoute";
import RecipesForm from "./RecipesForm/RecipesForm";
import RecipesList from "./RecipesList/RecipesList";

const Recipes = ({ match, location, history }) => {
  const { path } = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <PrivateRoute path={`${path}/add`} component={RecipesForm} exact />
        <PrivateRoute path={`${path}/:id`} component={RecipesForm} exact />
        <PrivateRoute path={`${path}`} component={RecipesList} exact />
      </Switch>
    </Layout>
  );
};

export default Recipes;
