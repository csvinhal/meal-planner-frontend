import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Layout from "../../hoc/Layout";
import RecipesForm from "./RecipesForm/RecipesForm";
import RecipesList from "./RecipesList/RecipesList";

const Recipes = () => {
  const { path } = useRouteMatch();
  return (
    <div className="page">
      <Layout>
        <Switch>
          <Route exact path={`${path}/add`} component={RecipesForm} />
          <Route exact path={`${path}/:id`} component={RecipesForm} />
          <Route exact path={`${path}`} component={RecipesList} />
        </Switch>
      </Layout>
    </div>
  );
};

export default Recipes;
