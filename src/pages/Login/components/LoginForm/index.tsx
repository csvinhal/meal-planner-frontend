import authentication from '@assets/images/authentication.svg'
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
import { Form } from '@models/login'
import React, { FunctionComponent } from 'react'
import { useForm } from 'react-hook-form'

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      maxWidth: 560,
      marginRight: 'auto',
      marginLeft: 'auto',
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  banner: {
    margin: theme.spacing(1),
    height: '88px',
    width: 'auto',
  },
  form: {
    marginTop: theme.spacing(),
    width: '100%',
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
  onSignUp: () => void
  onSubmit: (form: Form) => void
}

const LoginForm: FunctionComponent<Props> = ({ onSignUp, onSubmit }: Props) => {
  const classes = useStyles()
  const { register, handleSubmit, errors } = useForm<Form>()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <img
          className={classes.banner}
          src={authentication}
          alt="Banner da página de login"
        />
        <Typography variant="h5" component="h1">
          Login
        </Typography>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth error={!!errors.username}>
                <InputLabel htmlFor="ff-username">Nome do usuário</InputLabel>
                <Input
                  id="ff-username"
                  name="username"
                  autoComplete="username"
                  aria-describedby="ht-username"
                  inputRef={register({
                    required: { value: true, message: 'O campo é obrigatório' },
                  })}
                  required
                  autoFocus
                />
                {errors.username ? (
                  <FormHelperText id="ht-username" error>
                    {errors?.username?.message}
                  </FormHelperText>
                ) : null}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth error={!!errors?.password}>
                <InputLabel htmlFor="ff-password">Senha</InputLabel>
                <Input
                  id="ff-password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  aria-describedby="ht-password"
                  inputRef={register({
                    required: { value: true, message: 'O campo é obrigatório' },
                  })}
                  required
                />
                {errors?.password ? (
                  <FormHelperText id="ht-password" error>
                    {errors?.password?.message}
                  </FormHelperText>
                ) : null}
              </FormControl>
            </Grid>
          </Grid>

          <div className={classes.buttonContainer}>
            <Button type="submit" variant="contained" color="primary">
              Acessar
            </Button>
            <Button
              type="button"
              variant="contained"
              className={classes.buttonBack}
              onClick={onSignUp}
            >
              Registrar
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  )
}

export default LoginForm
