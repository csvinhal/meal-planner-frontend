import { makeStyles } from '@material-ui/core/styles'
import { ScheduleDaysOfWeek } from '@models/schedule'
import React, { useMemo } from 'react'
import EmptyMeal from './EmptyMeal'
import MealOfDay from './MealOfDay'

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
    marginBottom: theme.spacing(1),
  },
}))

interface Props {
  weekDays: ScheduleDaysOfWeek
}

const WeekMeals = ({ weekDays }: Props) => {
  const classes = useStyles()
  const items = useMemo(
    () =>
      Object.keys(weekDays).map((weekDay, i) => {
        const meal = weekDays[weekDay]

        return (
          <div key={i} className={classes.cols}>
            {meal ? <MealOfDay meal={meal} /> : <EmptyMeal />}
          </div>
        )
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [weekDays],
  )

  return <div className={classes.root}>{items}</div>
}

export default WeekMeals
