import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: theme.spacing(4 * 8),
    [theme.breakpoints.up("md")]: {
      maxWidth: 560
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  }
}));

const Register = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChangeUsername = event => {
    setUsername(event.target.value);
  };

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    try {
      const signUpResponse = await Auth.signUp({
        username,
        password,
        attributes: {
          email
        }
      });
      console.log(signUpResponse);
      history.push("/");
    } catch (error) {
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      setErrors({
        errors: {
          ...errors,
          cognito: err
        }
      });
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h3" component="h1">
          Registrar
        </Typography>
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl className={classes.margin} fullWidth>
                <InputLabel htmlFor="ff-username">Nome do usuário</InputLabel>
                <Input id="ff-username" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.margin} fullWidth>
                <InputLabel htmlFor="ff-email">E-mail</InputLabel>
                <Input id="ff-email" aria-describedby="email-helper-text" />
                <FormHelperText id="email-helper-text">
                  Nós nunca vamos compartilhar o seu e-mail!
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item>
              <Button variant="contained" color="primary">
                Primary
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default Register;
