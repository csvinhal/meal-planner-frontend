import { Form } from '@models/login'
import { Auth } from 'aws-amplify'
import React, { FunctionComponent, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { actions as toastActions } from '../../../reducers/toast'
import LoginForm from '../components/LoginForm'

const LoginPage: FunctionComponent = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSubmit = async (form: Form) => {
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
  }

  const handleSignUp = useCallback(() => {
    history.push('register')
  }, [history])

  return <LoginForm onSignUp={handleSignUp} onSubmit={handleSubmit} />
}

export default LoginPage
