import Layout from '@components/Layout/Layout'
import React from 'react'
import { DialogProvider } from '@providers/DeleteDialog'
import RecipesContainer from './container/recipes'

const Recipes = () => (
  <DialogProvider>
    <Layout>
      <RecipesContainer />
    </Layout>
  </DialogProvider>
)

export default Recipes
