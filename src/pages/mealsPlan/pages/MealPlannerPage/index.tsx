import Layout from '@containers/Layout'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Planner from '../../components/Planner'
import Recipes from '../../components/Recipes'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
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

const MealsPlan = () => {
  const classes = useStyles()
  return (
    <Layout maxWidth={false} fixed>
      <div className={classes.root}>
        <Recipes />
        <div className={classes.planner}>
          <Planner />
        </div>
      </div>
    </Layout>
  )
}

export default MealsPlan
