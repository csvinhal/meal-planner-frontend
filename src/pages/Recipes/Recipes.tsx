import { DialogProvider } from '@providers/DeleteDialog'
import React from 'react'
import RecipesContainer from './container/RecipesContainer'

const Recipes = () => (
  <DialogProvider>
    <RecipesContainer />
  </DialogProvider>
)

export default Recipes
