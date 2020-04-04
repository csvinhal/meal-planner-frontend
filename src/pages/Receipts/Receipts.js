import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../hoc/Layout";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      maxWidth: 560,
    },
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
  if (!values.name) {
    errors.name = "O campo é obrigatório";
  }

  return errors;
};

const Receipts = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleToSignUp = () => {
    history.push("/");
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
    },
    validate,
    onSubmit: async (values) => {
      alert(values);
    },
  });

  return (
    <Layout>
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
                error={formik.touched.username && !!formik.errors.username}
              >
                <InputLabel htmlFor="ff-name">Nome da receita</InputLabel>
                <Input
                  id="ff-name"
                  name="name"
                  autoComplete="nickname"
                  aria-describedby="ht-name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <FormHelperText id="ht-name" error>
                    {formik.errors.username}
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
              onClick={handleToSignUp}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </Paper>
    </Layout>
  );
};

export default Receipts;
