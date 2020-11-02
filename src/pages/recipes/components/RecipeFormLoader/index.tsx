import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Skeleton } from '@material-ui/lab'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: 560,
    },
  },
  field: {
    marginBottom: theme.spacing(2),
  },
  lastField: {
    marginBottom: theme.spacing(4),
  },
  buttonContainer: {
    display: 'flex',
  },
  buttonBack: {
    marginLeft: theme.spacing(2),
  },
}))

const RecipeFormLoader = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <Typography variant="h3" component="h1">
        <Skeleton animation="wave" width="180px" />
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Skeleton
            className={classes.field}
            animation="wave"
            height={32}
            style={{ marginBottom: 8 }}
          />
          <Skeleton animation="wave" height={32} style={{ marginBottom: 8 }} />
        </Grid>
      </Grid>
      <div className={classes.buttonContainer}>
        <Skeleton animation="wave" width="110px" height={36} />
        <Skeleton
          className={classes.buttonBack}
          animation="wave"
          width="110px"
          height={36}
        />
      </div>
    </Paper>
  )
}

export default RecipeFormLoader
