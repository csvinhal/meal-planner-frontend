import Home from '../pages/Home'
import Login from '../pages/Login'
import MealsPlan from '../pages/MealsPlan'
import NotFound from '../pages/NotFound'
import Recipes from '../pages/Recipes'
import Register from '../pages/Register'
import { AUTH_ONLY } from './types'

export default () => [
  {
    path: '/',
    exact: true,
    component: Home,
    meta: {
      [AUTH_ONLY]: true,
    },
  },
  {
    path: '/recipes',
    exact: true,
    component: Recipes,
    meta: {
      [AUTH_ONLY]: true,
    },
  },
  {
    path: '/meals-plan',
    exact: true,
    component: MealsPlan,
    meta: {
      [AUTH_ONLY]: true,
    },
  },
  {
    path: '/register',
    exact: true,
    component: Register,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '*',
    component: NotFound,
    ignoreGlobal: true,
  },
]
