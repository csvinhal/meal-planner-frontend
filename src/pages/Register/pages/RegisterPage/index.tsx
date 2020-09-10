import { Form } from '@models/register'
import { Auth } from 'aws-amplify'
import React, { FunctionComponent, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import RegisterForm from '../../components/RegisterForm'

const RegisterPage: FunctionComponent = () => {
  const history = useHistory()

  const handleGoToSignIn = useCallback(() => {
    history.push('/login')
  }, [history])

  const handleSubmit = async (values: Form) => {
    const { username, password, email } = values
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      })
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <RegisterForm onSubmit={handleSubmit} onGoToSignIn={handleGoToSignIn} />
  )
}

export default RegisterPage
