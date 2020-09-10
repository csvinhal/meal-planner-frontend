import Layout from '@containers/Layout'
import { makeStyles } from '@material-ui/core/styles'
import React, { FunctionComponent } from 'react'
import Planner from './Planner/Planner'
import Recipes from './Recipes/Recipes'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  planner: {
    marginLeft: theme.spacing(4),
  },
}))

const MealsPlan: FunctionComponent = () => {
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
