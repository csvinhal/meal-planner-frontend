import meal from '@assets/images/breakfast.svg'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ScheduleDaysOfWeek } from '@models/schedule'
import React, { memo } from 'react'

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
    textAlign: 'center',
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
    marginBottom: theme.spacing(1)
  },
}))

interface Props {
  weekDays: ScheduleDaysOfWeek
}

const WeekMeals = ({ weekDays }: Props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {Object.keys(weekDays).map((weekDay, i) => {
        return (
          <div key={i} className={classes.cols}>
            <div className={classes.emptyMeal}>
              <img className={classes.svgMeal} src={meal} alt="Meal" />
              <Typography variant="subtitle1">
                {weekDays[weekDay]?.recipe.recipeName}
              </Typography>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default memo(WeekMeals)
