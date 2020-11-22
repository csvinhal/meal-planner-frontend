import { DialogProvider } from '@providers/DeleteDialog'
import { RecipesProvider } from '@providers/Recipes'
import React from 'react'
import RecipesContainer from './container/RecipesContainer'

const Recipes = () => (
  <DialogProvider>
    <RecipesProvider>
      <RecipesContainer />
    </RecipesProvider>
  </DialogProvider>
)

export default Recipes
