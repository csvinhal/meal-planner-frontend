import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Paper,
  Typography,
} from '@material-ui/core'
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
  form: {
    marginTop: theme.spacing(2),
  },
  buttonContainer: {
    marginTop: theme.spacing(4),
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
  const { register, handleSubmit, errors, setValue } = useForm<
    RecipesFormInput
  >()

  if (recipe) {
    setValue('recipeName', recipe.recipeName)
    setValue('description', recipe.description)
  }

  return (
    <Paper className={classes.paper}>
      <Typography variant="h3" component="h1">
        Receitas
      </Typography>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth error={!!errors.recipeName}>
              <InputLabel htmlFor="ff-name">Nome</InputLabel>
              <Input
                id="ff-name"
                name="recipeName"
                aria-describedby="ht-name"
                inputRef={register({
                  required: { value: true, message: 'O campo é obrigatório' },
                })}
              />
              {errors.recipeName ? (
                <FormHelperText id="ht-name" error>
                  {errors?.recipeName?.message}
                </FormHelperText>
              ) : null}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="ff-description">Descrição</InputLabel>
              <Input
                id="ff-description"
                name="description"
                inputRef={register()}
              />
            </FormControl>
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
  recipe: {
    _id: '',
    recipeName: '',
    description: '',
  },
}

export default memo(RecipesForm)
