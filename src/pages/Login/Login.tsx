import { LoginFormInput } from '@models/login'
import { useToastEffects } from '@providers/Toast'
import { Auth } from 'aws-amplify'
import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import LoginForm from './components/LoginForm'

const Login = () => {
  const history = useHistory()
  const { showToast } = useToastEffects()

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
        showToast({
          severity: 'error',
          message: error.message,
        })
      }
    },
    [history, showToast],
  )

  const handleSignUp = useCallback(() => {
    history.push('register')
  }, [history])

  return <LoginForm onSignUp={handleSignUp} onSubmit={handleSubmit} />
}

export default Login
