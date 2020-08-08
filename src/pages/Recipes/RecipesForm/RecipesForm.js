import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Paper
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { actions as loaderActions } from "../../../reducers/loading";
import { actions as toastActions } from "../../../reducers/toast";
import {
  createRecipe,
  getRecipe,
  updateRecipe
} from "../../../shared/recipesApi";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    margin: "auto",
    [theme.breakpoints.up("md")]: {
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
}));

const validate = (values) => {
  const errors = {};
  if (!values.recipeName) {
    errors.recipeName = "O campo é obrigatório";
  }

  return errors;
};

const RecipesForm = () => {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState(null);
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      dispatch(loaderActions.showLoader());
      if (id) {
        const { data } = await getRecipe(id);
        setRecipe(data);
      }
      dispatch(loaderActions.closeLoader());
    };
    fetchRecipe();
  }, [id, setRecipe, dispatch]);

  const formik = useFormik({
    initialValues: {
      _id: "",
      recipeName: "",
      description: "",
    },
    validate,
    onSubmit: async (values) => {
      dispatch(loaderActions.showLoader());
      if (id) {
        await updateRecipe(id, values);
        dispatch(
          toastActions.showMessage({
            severity: "success",
            message: "Receita atualizada com sucesso!",
          })
        );
      } else {
        await createRecipe(values);
        dispatch(
          toastActions.showMessage({
            severity: "success",
            message: "Receita salva com sucesso!",
          })
        );
      }
      dispatch(loaderActions.closeLoader());
      history.push("/recipes");
    },
  });

  const { setFormikState } = formik;

  useEffect(() => {
    if (recipe) {
      setFormikState((prevState) => ({
        ...prevState,
        values: {
          ...prevState.values,
          ...recipe,
        },
      }));
    }
  }, [setFormikState, recipe]);

  const goBack = useCallback(() => {
    history.push("/recipes");
  }, [history]);

  return (
    <Paper className={classes.paper}>
      <Typography variant="h3" component="h1">
        Receitas
      </Typography>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl
              fullWidth
              error={formik.touched.recipeName && !!formik.errors.recipeName}
            >
              <InputLabel htmlFor="ff-name">Nome</InputLabel>
              <Input
                id="ff-name"
                name="recipeName"
                aria-describedby="ht-name"
                {...formik.getFieldProps("recipeName")}
              />
              {formik.touched.recipeName && formik.errors.recipeName ? (
                <FormHelperText id="ht-name" error>
                  {formik.errors.recipeName}
                </FormHelperText>
              ) : null}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl
              fullWidth
              error={formik.touched.description && !!formik.errors.description}
            >
              <InputLabel htmlFor="ff-description">Descrição</InputLabel>
              <Input
                id="ff-description"
                name="description"
                {...formik.getFieldProps("description")}
              />
            </FormControl>
          </Grid>
        </Grid>
        <div className={classes.buttonContainer}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Salvar
          </Button>
          <Button
            type="button"
            color="primary"
            className={classes.buttonBack}
            onClick={goBack}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Paper>
  );
};

RecipesForm.propTypes = {};

export default RecipesForm;
