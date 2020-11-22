import { getRecipes } from '@api/recipesApi'
import { FormControl, Input, InputLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Recipe } from '@models/recipes'
import { useLoaderEffects } from '@providers/Loader'
import React, { useCallback, useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '235px',
  },
  search: {
    paddingBottom: theme.spacing(1),
  },
  cards: {
    display: 'block',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}))

const Recipes = () => {
  const classes = useStyles()
  const [recipes, setRecipes] = useState<Recipe[]>()
  const { showLoader, closeLoader } = useLoaderEffects()

  const fetchRecipes = useCallback(async () => {
    showLoader()
    const { data } = await getRecipes()
    setRecipes(data)
    closeLoader()
  }, [showLoader, closeLoader])

  useEffect(() => {
    fetchRecipes()
  }, [fetchRecipes])

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <FormControl fullWidth>
          <InputLabel htmlFor="ff-name">Nome</InputLabel>
          <Input id="ff-name" name="recipeName" aria-describedby="ht-name" />
        </FormControl>
      </div>
      {recipes?.map((recipe: Recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </div>
  )
}

export default Recipes
