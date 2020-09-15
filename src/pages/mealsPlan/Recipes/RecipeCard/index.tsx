import imageNotFound from '@assets/images/image-not-found.svg'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      marginTop: theme.spacing(1),
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    media: {
      height: 100,
      backgroundColor: theme.palette.background.default,
      backgroundPosition: 'bottom center',
      backgroundSize: 'contain',
    },
  }),
)

interface Props {
  recipe: {
    _id: string
    recipeName: string
    image: string
    description: string
  }
}

const RecipeCard = ({ recipe }: Props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} draggable>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageNotFound}
          title={`Receita de ${recipe.recipeName}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {recipe.recipeName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default RecipeCard
