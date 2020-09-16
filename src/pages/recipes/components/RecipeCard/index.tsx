import imageNotFound from '@assets/images/image-not-found.svg'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React, { memo, useCallback } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'

interface Props {
  recipe: {
    _id: string
    recipeName: string
    image: string
    description: string
  }
  handleRemove: (id: string) => void
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: 'auto',
    },
    media: {
      height: 140,
      backgroundColor: theme.palette.background.default,
      backgroundPosition: 'bottom center',
      backgroundSize: 'contain',
    },
  }),
)

const RecipeCard = ({ recipe, handleRemove }: Props) => {
  const classes = useStyles()
  const { path } = useRouteMatch()
  const history = useHistory()

  const handleEdit = useCallback(
    (url) => {
      history.push(url)
    },
    [history],
  )

  return (
    <Card className={classes.root}>
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
          <Typography variant="body2" color="textSecondary" component="p">
            {recipe.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={() => handleEdit(`${path}/${recipe._id}`)}
        >
          Editar
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={() => handleRemove(recipe._id)}
        >
          Remover
        </Button>
      </CardActions>
    </Card>
  )
}

export default memo(RecipeCard)
