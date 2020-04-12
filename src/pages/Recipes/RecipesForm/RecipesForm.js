import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  createRecipe,
  getRecipe,
  updateRecipe,
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
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getRecipe(id).then((response) => formik.setValues(response.data));
    }
  }, []);

  const goBack = () => {
    history.push("/recipes");
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      recipeName: "",
    },
    validate,
    onSubmit: async (values) => {
      if (id) {
        try {
          const data = await updateRecipe(id, values);
          goBack();
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          const data = await createRecipe(values);
          goBack();
        } catch (err) {
          console.log(err);
        }
      }
    },
  });

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
              <InputLabel htmlFor="ff-name">Nome da receita</InputLabel>
              <Input
                id="ff-name"
                name="recipeName"
                aria-describedby="ht-name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.recipeName}
              />
              {formik.touched.recipeName && formik.errors.recipeName ? (
                <FormHelperText id="ht-name" error>
                  {formik.errors.recipeName}
                </FormHelperText>
              ) : null}
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

export default RecipesForm;
