import emptyMeal from '@assets/images/breakfast.svg'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Meal } from '@models/meals'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  emptyMeal: {
    maxHeight: '120px',
    maxWidth: '120px',
    margin: 'auto',
  },
  svgMeal: {
    width: '100%',
    height: 'auto',
    marginBottom: theme.spacing(1),
  },
}))

interface Props {
  meal: Meal
}

const MealOfDay = ({ meal }: Props) => {
  const classes = useStyles()
  return (
    <div className={classes.emptyMeal}>
      <img className={classes.svgMeal} src={emptyMeal} alt="Meal" />
      <Typography variant="subtitle1" component="h2" align="center">
        {meal.recipe.recipeName}
      </Typography>
    </div>
  )
}

export default MealOfDay
