import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { Recipe, RecipesFormInput, RecipesInput } from '@models/recipes'
import React, { memo, useMemo, useRef, useState } from 'react'
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
  inputFile: {
    display: 'none',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: 'auto',
  },
  recipeImage: {
    height: '8rem',
    width: 'auto',
    marginBottom: theme.spacing(1),
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
  onSubmit: (form: RecipesInput) => void
}

const RecipesForm = ({ recipe, onGoBack, onSubmit }: Props) => {
  const classes = useStyles()
  const inputFileRef = useRef<HTMLInputElement | null>(null)
  const [recipeImagePreview, setRecipeImagePreview] = useState<string>(
    recipe?.recipeImage ? `data:image/png;base64, ${recipe.recipeImage}` : '',
  )
  const { register, handleSubmit, errors } = useForm<RecipesFormInput>({
    defaultValues: {
      recipeName: recipe?.recipeName,
      description: recipe?.description,
    },
  })

  const imagePreview = useMemo(
    () =>
      recipeImagePreview ? (
        <div>
          <img
            className={classes.recipeImage}
            src={recipeImagePreview}
            alt="Imagem da receita"
          />
        </div>
      ) : (
        ''
      ),
    [classes.recipeImage, recipeImagePreview],
  )

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h3" component="h1">
        Receitas
      </Typography>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(({ recipeName, description, recipeImage }) =>
          onSubmit({
            recipeName,
            description,
            recipeImage: recipeImage ? (recipeImage[0] as File) : undefined,
          }),
        )}
      >
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
          <Grid item xs={12} className={classes.imageContainer}>
            {imagePreview}

            <FormControl>
              <Button
                variant="contained"
                color="default"
                startIcon={<CloudUploadIcon />}
                onClick={() => inputFileRef.current?.click()}
              >
                Selecionar foto
              </Button>
              <input
                className={classes.inputFile}
                id="ff-image"
                name="recipeImage"
                type="file"
                accept="image/*"
                ref={(e) => {
                  register(e, { required: true })
                  inputFileRef.current = e
                }}
                onChange={(e) => {
                  const files = e.target?.files as FileList
                  const reader = new FileReader()

                  reader.onloadend = (event) => {
                    setRecipeImagePreview(event.target?.result as string)
                  }

                  reader.readAsDataURL(files[0])
                }}
              />
              {errors.recipeImage ? (
                <FormHelperText error>O campo é obrigatório</FormHelperText>
              ) : null}
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
  recipe: {},
}

export default memo(RecipesForm)
