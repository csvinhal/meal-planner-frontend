import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Hidden,
  Paper,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Skeleton } from '@material-ui/lab'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  emptyState: {
    margin: 'auto',
  },
  card: {
    maxWidth: 345,
    margin: 'auto',
  },
  media: {
    height: 140,
  },
}))

const RecipeListLoader = () => {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        <Skeleton width="180px" />
      </Typography>
      <Paper elevation={2} className={classes.paper}>
        <Grid container spacing={2}>
          <Hidden smDown>
            <Grid item xs={12}>
              <Skeleton animation="wave" width="110px" height={36} />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <Skeleton
                  animation="wave"
                  variant="rect"
                  className={classes.media}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <Skeleton />
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <Skeleton />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default RecipeListLoader
