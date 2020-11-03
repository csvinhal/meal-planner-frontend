import { createStyles, makeStyles } from '@material-ui/core/styles'
import { MealType } from '@models/meals'
import { Schedule } from '@models/schedule'
import { startOfWeek } from 'date-fns'
import React, { memo, useState } from 'react'
import PlannerRow from './PlannerRow'
import PlannerHeader from './PlannerHeader'

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
        <PlannerHeader />
      </div>

      <PlannerRow
        mealType={MealType.BREAKFAST}
        weekDays={schedule[MealType.BREAKFAST]}
      />

      <PlannerRow
        mealType={MealType.SNACK}
        weekDays={schedule[MealType.SNACK]}
      />

      <PlannerRow
        mealType={MealType.LUNCH}
        weekDays={schedule[MealType.LUNCH]}
      />

      <PlannerRow
        mealType={MealType.AFTERNOON_SNACK}
        weekDays={schedule[MealType.AFTERNOON_SNACK]}
      />

      <PlannerRow
        mealType={MealType.DINNER}
        weekDays={schedule[MealType.DINNER]}
      />
      <PlannerRow
        mealType={MealType.SUPPER}
        weekDays={schedule[MealType.SUPPER]}
      />
    </div>
  )
}

export default memo(Planner)
