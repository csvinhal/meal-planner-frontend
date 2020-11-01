import { createStyles, makeStyles } from '@material-ui/core/styles'
import { MealType } from '@models/meals'
import { Schedule } from '@models/schedule'
import clsx from 'clsx'
import { startOfWeek } from 'date-fns'
import React, { memo, useState } from 'react'
import MealHeader from './MealHeader'
import WeekHeader from './WeekHeader'
import WeekMeals from './WeekMeals'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    rowWrapper: {
      display: 'flex',
      flexDirection: 'row',
    },
    name: {
      minWidth: '60px',
      width: '60px',
      position: 'relative',
      paddingTop: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: 0,
      textAlign: 'center',
      margin: 'auto',
    },
    row: {
      display: 'flex',
      width: '100%',
    },
    rowMeal: {
      height: '152px',
      borderTop: '1px solid',
    },
    description: {
      // textOrientation: 'sideways-right',
      writingMode: 'vertical-lr',
      textTransform: 'uppercase',
      transform: 'rotate(180deg)',
    },
  }),
)

interface Props {
  schedule: Schedule
}

const Planner = ({ schedule }: Props) => {
  const classes = useStyles()
  const [startOfWeekDate, setStartOfWeek] = useState(startOfWeek(new Date()))

  return (
    <div className={classes.root}>
      <div className={classes.rowWrapper}>
        <div className={classes.name} aria-hidden />
        <WeekHeader />
      </div>

      <div className={clsx(classes.rowWrapper, classes.rowMeal)}>
        <MealHeader mealType={MealType.BREAKFAST} />
        <WeekMeals weekDays={schedule[MealType.BREAKFAST]} />
      </div>

      <div className={clsx(classes.rowWrapper, classes.rowMeal)}>
        <MealHeader mealType={MealType.SNACK} />
        <WeekMeals weekDays={schedule[MealType.SNACK]} />
      </div>

      <div className={clsx(classes.rowWrapper, classes.rowMeal)}>
        <MealHeader mealType={MealType.LUNCH} />
        <WeekMeals weekDays={schedule[MealType.LUNCH]} />
      </div>

      <div className={clsx(classes.rowWrapper, classes.rowMeal)}>
        <MealHeader mealType={MealType.AFTERNOON_SNACK} />
        <WeekMeals weekDays={schedule[MealType.AFTERNOON_SNACK]} />
      </div>

      <div className={clsx(classes.rowWrapper, classes.rowMeal)}>
        <MealHeader mealType={MealType.DINNER} />
        <WeekMeals weekDays={schedule[MealType.DINNER]} />
      </div>

      <div className={clsx(classes.rowWrapper, classes.rowMeal)}>
        <MealHeader mealType={MealType.SUPPER} />
        <WeekMeals weekDays={schedule[MealType.SUPPER]} />
      </div>
    </div>
  )
}

export default memo(Planner)
