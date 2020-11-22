import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Skeleton } from '@material-ui/lab'
import React from 'react'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      marginTop: theme.spacing(1),
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: theme.spacing(2),
    },
    media: {
      height: 100,
      backgroundColor: theme.palette.background.default,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    },
  }),
)

const RecipeCardLoader = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Skeleton animation="wave" variant="rect" className={classes.media} />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="span">
            <Skeleton />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default RecipeCardLoader
