import React from 'react'
import emptyMeal from '@assets/images/breakfast.svg'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  emptyMeal: {
    maxHeight: '120px',
    maxWidth: '120px',
    margin: 'auto',
  },
  svgMeal: {
    width: '100%',
    height: 'auto',
    opacity: '0.5',
    marginBottom: theme.spacing(1),
  },
}))

const EmptyMeal = () => {
  const classes = useStyles()
  return (
    <div className={classes.emptyMeal}>
      <img className={classes.svgMeal} src={emptyMeal} alt="Meal" />
    </div>
  )
}

export default EmptyMeal
