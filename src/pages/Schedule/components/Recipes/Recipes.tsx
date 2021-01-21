import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Recipe } from '@models/recipes'
import React, { memo, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import RecipeCard from './RecipeCard/RecipeCard'
import RecipeCardLoader from './RecipeCardLoader/RecipeCardLoader'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '235px',
  },
  search: {
    paddingBottom: theme.spacing(1),
  },
}))

interface Props {
  recipes: Recipe[]
  loading: boolean
}

const Recipes = ({ recipes, loading }: Props) => {
  const classes = useStyles()
  const { register, watch } = useForm<{ recipeName: string }>({
    defaultValues: { recipeName: '' },
  })

  const recipeNameWatch = watch('recipeName')

  const cards = useMemo(() => {
    if (loading) {
      return (
        <>
          <RecipeCardLoader />
          <RecipeCardLoader />
        </>
      )
    }
    return recipes
      ?.filter((recipe: Recipe) =>
        recipe.recipeName
          .toLocaleLowerCase()
          .includes(recipeNameWatch.toLocaleLowerCase()),
      )
      .map((recipe: Recipe) => <RecipeCard key={recipe._id} recipe={recipe} />)
  }, [loading, recipes, recipeNameWatch])

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <TextField
          id="ff-name"
          name="recipeName"
          label="Nome"
          inputRef={register}
          fullWidth
        />
      </div>

      {cards}
    </div>
  )
}

export default memo(Recipes)
