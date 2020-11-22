import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import RecipesForm from '../pages/Recipes/RecipeForm/RecipeForm'
import Recipes from '../pages/Recipes/Recipes'
import Register from '../pages/Register/Register'
import SchedulePage from '../pages/Schedule/Schedule'
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
    path: '/recipes/add',
    exact: true,
    component: RecipesForm,
    meta: {
      [AUTH_ONLY]: true,
    },
  },
  {
    path: '/recipes/:id',
    exact: true,
    component: RecipesForm,
    meta: {
      [AUTH_ONLY]: true,
    },
  },
  {
    path: '/meals-plan',
    exact: true,
    component: SchedulePage,
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
    component: PageNotFound,
    ignoreGlobal: true,
  },
]
