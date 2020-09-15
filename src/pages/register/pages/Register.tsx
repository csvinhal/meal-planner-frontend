import { RegisterFormInput } from '@models/register'
import { Auth } from 'aws-amplify'
import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  const history = useHistory()

  const handleGoToSignIn = useCallback(() => {
    history.push('/login')
  }, [history])

  const handleSubmit = async (values: RegisterFormInput) => {
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

export default Register
