import Layout from "@containers/Layout";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import RecipesForm from "./RecipesForm/RecipesForm";
import RecipesList from "./RecipesList/RecipesList";

const Recipes = () => {
  const { path } = useRouteMatch();
  return (
    <div className="page">
      <Layout>
        <Switch>
          <Route path={`${path}/add`} component={RecipesForm} exact />
          <Route path={`${path}/:id`} component={RecipesForm} exact />
          <Route path={`${path}`} component={RecipesList} exact />
        </Switch>
      </Layout>
    </div>
  );
};

export default Recipes;
