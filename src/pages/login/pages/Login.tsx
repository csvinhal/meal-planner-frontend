import { LoginFormInput } from '@models/login'
import { Auth } from 'aws-amplify'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { actions as toastActions } from '../../../reducers/toast'
import LoginForm from '../components/LoginForm'

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSubmit = useCallback(
    async (form: LoginFormInput) => {
      const { username, password } = form
      try {
        await Auth.signIn({
          username,
          password,
        })
        history.push('/')
      } catch (error) {
        dispatch(
          toastActions.showMessage({
            severity: 'error',
            message: error.message,
          }),
        )
      }
    },
    [history, dispatch],
  )

  const handleSignUp = useCallback(() => {
    history.push('register')
  }, [history])

  return <LoginForm onSignUp={handleSignUp} onSubmit={handleSubmit} />
}

export default Login
