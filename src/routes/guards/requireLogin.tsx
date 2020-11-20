import { Auth } from 'aws-amplify'
import Axios from '../../api/requestsConfig'
import { AUTH_ONLY } from '../types'

const requireLogin = async (to: any, from: any, next: any) => {
  try {
    if (to.meta[AUTH_ONLY]) {
      const session = await Auth.currentSession()

      if (!session.isValid()) {
        next.redirect('/login')
      } else {
        Axios.defaults.headers.common.Authorization = `Bearer ${session
          .getIdToken()
          .getJwtToken()}`
      }
    }
  } catch (err) {
    next.redirect('/login')
  }
  next()
}

export default requireLogin
