import imageNotFound from '@assets/images/image-not-found.svg'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Recipe } from '@models/recipes'
import cx from 'clsx'
import React, { useMemo } from 'react'

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
    mediaNotFound: {
      backgroundSize: '7rem',
    },
  }),
)

interface Props {
  recipe: Recipe
}

const RecipeCard = ({ recipe }: Props) => {
  const classes = useStyles()

  const recipeImage = useMemo(
    () =>
      recipe.recipeImage
        ? `data:image/png;base64, ${recipe.recipeImage}`
        : imageNotFound,
    [recipe],
  )

  return (
    <Card className={classes.root} draggable>
      <CardActionArea>
        <CardMedia
          className={cx(classes.media, {
            [classes?.mediaNotFound]: !recipe.recipeImage,
          })}
          image={recipeImage}
          title={`Receita de ${recipe.recipeName}`}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="span">
            {recipe.recipeName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default RecipeCard
