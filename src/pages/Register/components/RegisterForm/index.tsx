import signIn from '@assets/images/sign-in.svg'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Form } from '@models/register'
import React, { FunctionComponent, useCallback } from 'react'
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
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
    },
  },
}))

interface Props {
  onGoToSignIn: () => void
  onSubmit: (form: Form) => void
}

const RegisterForm: FunctionComponent<Props> = ({
  onGoToSignIn,
  onSubmit,
}: Props) => {
  const classes = useStyles()
  const { register, handleSubmit, errors, getValues } = useForm<Form>()

  const isUnique = useCallback(
    (value: string) => {
      const password = getValues('password')
      if (password !== value) {
        return 'As senhas não coincidem'
      }

      return undefined
    },
    [getValues],
  )

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <img
          className={classes.banner}
          src={signIn}
          alt="Banner da tela de registrar"
        />
        <Typography variant="h5" component="h1">
          Cadastrar
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
                  type="text"
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
              <FormControl fullWidth error={!!errors.email}>
                <InputLabel htmlFor="ff-email">E-mail</InputLabel>
                <Input
                  id="ff-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  aria-describedby="ht-email"
                  inputRef={register({
                    required: { value: true, message: 'O campo é obrigatório' },
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Endereço de e-mail inválido',
                    },
                  })}
                  required
                />

                <FormHelperText id="ht-email" error={!!errors.email}>
                  {errors.email
                    ? errors?.email?.message
                    : 'Nós nunca vamos compartilhar o seu e-mail!'}
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth error={!!errors.password}>
                <InputLabel htmlFor="ff-password">Senha</InputLabel>
                <Input
                  id="ff-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  aria-describedby="ht-password"
                  inputRef={register({
                    required: { value: true, message: 'O campo é obrigatório' },
                  })}
                />
                {errors.password ? (
                  <FormHelperText id="ht-password" error>
                    {errors?.password?.message}
                  </FormHelperText>
                ) : null}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth error={!!errors.passwordConfirm}>
                <InputLabel htmlFor="ff-password-confirm">
                  Confirmação da senha
                </InputLabel>
                <Input
                  id="ff-password-confirm"
                  type="password"
                  name="passwordConfirm"
                  autoComplete="new-password"
                  aria-describedby="ht-password-confirm"
                  inputRef={register({
                    required: { value: true, message: 'O campo é obrigatório' },
                    validate: isUnique,
                  })}
                />
                {errors.passwordConfirm ? (
                  <FormHelperText id="ht-password-confirm" error>
                    {errors?.passwordConfirm?.message}
                  </FormHelperText>
                ) : null}
              </FormControl>
            </Grid>
          </Grid>

          <div className={classes.buttonContainer}>
            <Button type="submit" variant="contained" color="primary">
              Registrar
            </Button>
            <Button
              type="button"
              variant="contained"
              className={classes.buttonBack}
              onClick={onGoToSignIn}
            >
              Voltar para o login
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  )
}

export default RegisterForm
