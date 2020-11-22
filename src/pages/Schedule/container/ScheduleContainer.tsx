import Header from '@components/Header/Header'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { useRecipesEffects, useRecipesState } from '@providers/Recipes'
import { useScheduleEffects, useScheduleState } from '@providers/Schedule'
import React, { useEffect } from 'react'
import Planner from '../components/Planner'
import Recipes from '../components/Recipes/Recipes'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    schedule: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    planner: {
      marginLeft: theme.spacing(4),
    },
  }),
)

const ScheduleContainer = () => {
  const classes = useStyles()
  const { schedule } = useScheduleState()
  const { loading: recipesLoading, recipes } = useRecipesState()
  const { fetchRecipes } = useRecipesEffects()

  const { fetchSchedule } = useScheduleEffects()

  useEffect(() => {
    fetchSchedule(new Date().toISOString())
    fetchRecipes()
  }, [fetchSchedule, fetchRecipes])

  return (
    <div className={classes.root}>
      <Header title="Agenda" />
      <div className={classes.schedule}>
        <Recipes recipes={recipes} loading={recipesLoading} />
        <div className={classes.planner}>
          <Planner schedule={schedule} />
        </div>
      </div>
    </div>
  )
}

export default ScheduleContainer
