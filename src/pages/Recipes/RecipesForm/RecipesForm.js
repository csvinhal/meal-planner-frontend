import { useMutation } from "@apollo/react-hooks";
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
import { gql } from "apollo-boost";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useLazyQuery } from "@apollo/react-hooks";

const CREATE__RECIPE = gql`
  mutation($recipeName: String, $description: String) {
    createRecipe(
      input: { recipeName: $recipeName, description: $description }
    ) {
      recipe {
        id
        recipeName
        description
      }
    }
  }
`;

const UPDATE__RECIPE = gql`
  mutation($id: ID!, $recipeName: String, $description: String) {
    updateRecipe(
      input: { id: $id, recipeName: $recipeName, description: $description }
    ) {
      recipe {
        id
        recipeName
        description
      }
    }
  }
`;

const RECIPE = gql`
  query($id: ID!) {
    recipe(id: $id) {
      recipeName
      description
    }
  }
`;

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
  const [recipe, setRecipe] = useState(null);
  const [createRecipe] = useMutation(CREATE__RECIPE);
  const [updateRecipe] = useMutation(UPDATE__RECIPE);
  const [getRecipe, { data, loading }] = useLazyQuery(RECIPE);

  useEffect(() => {
    if (data && data.recipe && !loading) {
      setRecipe(data.recipe);
    }
  }, [data, loading]);

  useEffect(() => {
    if (id) {
      getRecipe({ variables: { id } });
    }
  }, [id]);

  const formik = useFormik({
    initialValues: {
      id: "",
      recipeName: "",
      description: "",
    },
    validate,
    onSubmit: (values) => {
      const { recipeName, description } = values;
      if (id) {
        updateRecipe({
          variables: { id, recipeName, description },
        }).then(() => {
          history.push("/recipes");
        });
      } else {
        createRecipe({ variables: { recipeName, description } }).then(() => {
          history.push("/recipes");
        });
      }
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
  }, [recipe, setFormikState]);

  const goBack = () => {
    history.push("/recipes");
  };

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
