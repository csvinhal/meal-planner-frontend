import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  mealCard: {
    maxWidth: 345,
    margin: 'auto',
    marginTop: theme.spacing(2),
  },
  media: {
    height: 140,
  },
}))

interface Props {
  image: string
  title: string
  name: string
  recipe: string
}

const MealCard = ({ image, title, name, recipe }: Props) => {
  const classes = useStyles()
  return (
    <Card className={classes.mealCard}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {recipe}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MealCard
