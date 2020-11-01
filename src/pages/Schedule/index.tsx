import Header from '@components/Header'
import Layout from '@containers/Layout'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Planner from './components/Planner'
import Recipes from './components/Recipes'
import useSchedulePlanHooks from './hooks'

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

const Schedule = () => {
  const classes = useStyles()
  const {
    state: { schedule },
  } = useSchedulePlanHooks()
  return (
    <Layout maxWidth={false} fixed>
      <div className={classes.root}>
        <Header title="Agenda" />
        <div className={classes.schedule}>
          <Recipes />
          <div className={classes.planner}>
            <Planner schedule={schedule} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Schedule
