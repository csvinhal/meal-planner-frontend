import { Meal } from '@models/meals'
import Axios from './requestsConfig'

export const getMeals = () => {
  return Axios.get<Meal[]>(`meals`)
}

export const createMeal = (meal: Meal) => {
  return Axios.post<Meal>(`meals`, meal)
}
