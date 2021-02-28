import { makeStyles } from '@material-ui/core/styles'
import { MealType } from '@models/meals'
import { ScheduleDaysOfWeek } from '@models/schedule'
import clsx from 'clsx'
import React, { memo } from 'react'
import MealHeader from './MealHeader'
import WeekMeals from './WeekMeals'

const useStyles = makeStyles({
  rowWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  rowMeal: {
    height: '152px',
    borderTop: '1px solid',
  },
})

interface Props {
  mealType: MealType
  weekDays: ScheduleDaysOfWeek
}

const PlannerRow = ({ mealType, weekDays }: Props) => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.rowWrapper, classes.rowMeal)}>
      <MealHeader mealType={mealType} />
      <WeekMeals weekDays={weekDays} mealType={mealType} />
    </div>
  )
}

export default memo(PlannerRow)
