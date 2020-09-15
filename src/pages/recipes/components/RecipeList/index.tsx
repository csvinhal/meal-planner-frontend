import Header from '@components/Header'
import { Button, Fab, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import React, { Fragment } from 'react'
import RecipeCard from '../RecipeCard'

interface Props {
  recipes: any[]
  handlerAdd: (...args: any[]) => any
  handleRemove: (id: string) => any
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
  button: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  fabButton: {
    position: 'fixed',
    right: theme.spacing(2),
    bottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

const RecipeList = ({ recipes, handlerAdd, handleRemove }: Props) => {
  const classes = useStyles()

  return (
    <Fragment>
      <Header title="Receitas" />
      <Paper elevation={2} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handlerAdd}
            >
              Adicionar
            </Button>
          </Grid>
          {recipes.map((recipe) => (
            <Grid key={recipe._id} item xs={12} sm={6} md={4} lg={3}>
              <RecipeCard
                recipe={recipe}
                handleRemove={() => handleRemove(recipe._id)}
              />
            </Grid>
          ))}
          <Fab
            className={classes.fabButton}
            color="primary"
            aria-label="add"
            onClick={handlerAdd}
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Paper>
    </Fragment>
  )
}

export default RecipeList
