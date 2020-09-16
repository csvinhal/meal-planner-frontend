import meal from '@assets/images/breakfast.svg'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
    minWidth: '960px',
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    borderLeft: '1px solid',
  },
  cols: {
    flex: 1,
    minWidth: '137px',
    display: 'flex',
    height: '100%',
  },
  emptyMeal: {
    maxHeight: '120px',
    maxWidth: '120px',
    margin: 'auto',
  },
  svgMeal: {
    width: '100%',
    height: 'auto',
    opacity: '0.5',
  },
}))

const Meal = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.cols}>
        <div className={classes.emptyMeal}>
          <img className={classes.svgMeal} src={meal} alt="Meal" />
        </div>
      </div>
      <div className={classes.cols}>
        <div className={classes.emptyMeal}>
          <img className={classes.svgMeal} src={meal} alt="Meal" />
        </div>
      </div>
      <div className={classes.cols}>
        <div className={classes.emptyMeal}>
          <img className={classes.svgMeal} src={meal} alt="Meal" />
        </div>
      </div>
      <div className={classes.cols}>
        <div className={classes.emptyMeal}>
          <img className={classes.svgMeal} src={meal} alt="Meal" />
        </div>
      </div>
      <div className={classes.cols}>
        <div className={classes.emptyMeal}>
          <img className={classes.svgMeal} src={meal} alt="Meal" />
        </div>
      </div>
      <div className={classes.cols}>
        <div className={classes.emptyMeal}>
          <img className={classes.svgMeal} src={meal} alt="Meal" />
        </div>
      </div>
      <div className={classes.cols}>
        <div className={classes.emptyMeal}>
          <img className={classes.svgMeal} src={meal} alt="Meal" />
        </div>
      </div>
    </div>
  )
}

export default Meal
