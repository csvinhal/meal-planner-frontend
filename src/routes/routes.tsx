import Home from '../pages/home/pages/Home'
import Login from '../pages/login/pages/Login'
import MealsPlan from '../pages/mealsPlan'
import PageNotFound from '../pages/pageNotFound/pages/PageNotFound/PageNotFound'
import RecipesFormPage from '../pages/recipes/pages/RecipesFormPage'
import RecipesListPage from '../pages/recipes/pages/RecipesListPage'
import Register from '../pages/register/pages/Register'
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
    component: RecipesListPage,
    meta: {
      [AUTH_ONLY]: true,
    },
  },
  {
    path: '/recipes/add',
    exact: true,
    component: RecipesFormPage,
    meta: {
      [AUTH_ONLY]: true,
    },
  },
  {
    path: '/recipes/:id',
    exact: true,
    component: RecipesFormPage,
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
    component: PageNotFound,
    ignoreGlobal: true,
  },
]
