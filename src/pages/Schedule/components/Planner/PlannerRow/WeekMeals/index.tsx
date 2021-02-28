import { createMeal } from '@api/mealsApi'
import { makeStyles } from '@material-ui/core/styles'
import { MealType } from '@models/meals'
import { Recipe } from '@models/recipes'
import { ScheduleDaysOfWeek } from '@models/schedule'
import React, { DragEvent, useCallback, useMemo, useState } from 'react'
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
  mealType: MealType
}

const WeekMeals = ({ weekDays, mealType }: Props) => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)

  const onDropRecipe = useCallback(
    async (event: DragEvent<HTMLDivElement>, date: string) => {
      event.preventDefault()

      const data = event.dataTransfer.getData('text')
      const recipe = JSON.parse(data) as Recipe

      await createMeal({ date, recipe, mealType })
    },
    [mealType],
  )

  const items = useMemo(
    () =>
      Object.keys(weekDays).map((weekDay, i) => {
        const onDrop = (e: DragEvent<HTMLDivElement>) =>
          onDropRecipe(e, weekDay)
        const onDragOver = (e: DragEvent<HTMLDivElement>) => e.preventDefault()
        const meal = weekDays[weekDay]

        return (
          <div
            key={i}
            className={classes.cols}
            onDrop={onDrop}
            onDragOver={onDragOver}
          >
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
