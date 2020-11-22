import { RecipeProvider } from '@providers/Recipe'
import React from 'react'
import RecipeFormContainer from './container/RecipeFormContainer'

const RecipesForm = () => (
  <RecipeProvider>
    <RecipeFormContainer />
  </RecipeProvider>
)

export default RecipesForm
