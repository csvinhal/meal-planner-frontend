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
  const { register } = useForm<{ recipeName: string }>()

  const cards = useMemo(() => {
    if (loading) {
      return (
        <>
          <RecipeCardLoader />
          <RecipeCardLoader />
        </>
      )
    }

    return recipes?.map((recipe: Recipe) => (
      <RecipeCard key={recipe._id} recipe={recipe} />
    ))
  }, [loading, recipes])

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
