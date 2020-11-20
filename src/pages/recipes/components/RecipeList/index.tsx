import Header from '@components/Header'
import { Button, Fab, Grid, Hidden, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import { Recipe } from '@models/recipes/recipe'
import React from 'react'
import RecipeCard from '../RecipeCard'

interface Props {
  recipes: Recipe[]
  handlerAdd: () => void
  handleRemove: (id: string) => void
}

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
  fabButton: {
    position: 'fixed',
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  },
}))

const RecipeList = ({ recipes, handlerAdd, handleRemove }: Props) => {
  const classes = useStyles()

  return (
    <>
      <Header title="Receitas" />
      <Paper elevation={2} className={classes.paper}>
        <Grid container spacing={2}>
          <Hidden xsDown>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handlerAdd}>
                Adicionar
              </Button>
            </Grid>
          </Hidden>
          {recipes.map((recipe) => (
            <Grid key={recipe._id} item xs={12} sm={6} md={4} lg={3}>
              <RecipeCard
                recipe={recipe}
                handleRemove={() => handleRemove(recipe._id as string)}
              />
            </Grid>
          ))}
          <Hidden smUp>
            <Fab
              className={classes.fabButton}
              color="primary"
              aria-label="add"
              onClick={handlerAdd}
            >
              <AddIcon />
            </Fab>
          </Hidden>
        </Grid>
      </Paper>
    </>
  )
}

export default RecipeList
