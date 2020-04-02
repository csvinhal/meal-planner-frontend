import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PersonOutline from "@material-ui/icons/PersonOutline";
import { Auth } from "aws-amplify";
import { useFormik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../context/StateContext";

const useStyles = makeStyles(theme => ({
  root: {
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: theme.spacing(2 * 8),
    [theme.breakpoints.up("md")]: {
      maxWidth: 560
    }
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    marginTop: theme.spacing(),
    width: "100%"
  },
  buttonContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  buttonBack: {
    marginLeft: theme.spacing(2)
  }
}));

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.email = "O campo é obrigatório";
  }

  if (!values.password) {
    errors.password = "O campo é obrigatório";
  }

  return errors;
};

const Login = () => {
  const [, dispatch] = useStateValue();
  const classes = useStyles();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validate,
    onSubmit: async values => {
      const { username, password } = values;
      try {
        const user = await Auth.signIn({
          username,
          password
        });
        dispatch({ type: "signed_in", user });
        history.push("/");
      } catch (error) {
        let err = null;
        !error.message ? (err = { message: error }) : (err = error);
        alert.log(err.message);
      }
    }
  });

  const handleToSignUp = () => {
    history.push("register");
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonOutline />
        </Avatar>
        <Typography variant="h5" component="h1">
          Login
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
                <InputLabel htmlFor="ff-username">Nome do usuário</InputLabel>
                <Input
                  id="ff-username"
                  name="username"
                  autoComplete="nickname"
                  aria-describedby="ht-username"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <FormHelperText id="ht-username" error>
                    {formik.errors.username}
                  </FormHelperText>
                ) : null}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl
                fullWidth
                error={formik.touched.password && !!formik.errors.password}
              >
                <InputLabel htmlFor="ff-password">Senha</InputLabel>
                <Input
                  id="ff-password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  aria-describedby="ht-password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText id="ht-password" error>
                    {formik.errors.password}
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
              Acessar
            </Button>
            <Button
              type="button"
              variant="contained"
              className={classes.buttonBack}
              onClick={handleToSignUp}
            >
              Registrar
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
