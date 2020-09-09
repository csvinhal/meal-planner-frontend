import Layout from '@containers/Layout'
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import RecipesForm from './pages/RecipesFormPage'
import RecipesList from './pages/RecipesListPage'

const Recipes = () => {
  const { path } = useRouteMatch()
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
  )
}

export default Recipes
