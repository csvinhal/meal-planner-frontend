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
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actions } from "../../../reducers/toast";
import {
  createRecipe,
  getRecipe,
  updateRecipe,
} from "../../../shared/recipesApi";
import PropTypes from "prop-types";

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

const RecipesForm = ({ showMessage }) => {
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
      let request;

      if (id) {
        request = updateRecipe(id, values);
      } else {
        request = createRecipe(values);
      }

      try {
        await request;
        showMessage({
          severity: "success",
          message: "Receita salva com sucesso!",
        });
        goBack();
      } catch (err) {
        const message =
          (err && err.errors && err.errors.body && err.errors.body.message) ||
          "Erro ao salvar receita";
        showMessage({
          severity: "error",
          message,
        });
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

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch),
});

RecipesForm.propTypes = {
  showMessage: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(RecipesForm);
