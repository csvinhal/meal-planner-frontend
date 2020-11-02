import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Recipe, RecipesFormInput } from '@models/recipes'
import React, { memo } from 'react'
import { useForm } from 'react-hook-form'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: 560,
    },
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  fieldsGrid: {
    marginBottom: theme.spacing(4),
  },
  buttonContainer: {
    marginBottom: theme.spacing(2),
  },
  buttonBack: {
    marginLeft: theme.spacing(2),
  },
}))

interface Props {
  recipe?: Recipe
  onGoBack: () => void
  onSubmit: (form: RecipesFormInput) => void
}

const RecipesForm = ({ recipe, onGoBack, onSubmit }: Props) => {
  const classes = useStyles()
  const { register, handleSubmit, errors } = useForm<RecipesFormInput>({
    defaultValues: {
      recipeName: recipe?.recipeName,
      description: recipe?.description,
    },
  })

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h3" component="h1">
        Receitas
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Grid className={classes.fieldsGrid} container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="ff-name"
              name="recipeName"
              label="Nome"
              inputRef={register({
                required: { value: true, message: 'O campo é obrigatório' },
              })}
              fullWidth
              error={!!errors.description}
              helperText={errors.recipeName ? errors.recipeName.message : ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="ff-description"
              name="description"
              label="Descrição"
              inputRef={register({
                required: { value: true, message: 'O campo é obrigatório' },
              })}
              fullWidth
              error={!!errors.description}
              helperText={errors.description ? errors.description.message : ''}
            />
          </Grid>
        </Grid>
        <div className={classes.buttonContainer}>
          <Button type="submit" variant="contained" color="primary">
            Salvar
          </Button>
          <Button
            type="button"
            color="primary"
            className={classes.buttonBack}
            onClick={onGoBack}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Paper>
  )
}

RecipesForm.defaultProps = {
  recipe: {},
}

export default memo(RecipesForm)
