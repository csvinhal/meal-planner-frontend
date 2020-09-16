import { Recipe, RecipesFormInput } from '@models/recipes'
import Axios from './requestsConfig'

export const getRecipes = () => {
  return Axios.get<Recipe[]>(`recipes`)
}

export const getRecipe = (id: string) => {
  return Axios.get<Recipe>(`recipes/${id}`)
}

export const createRecipe = (recipe: RecipesFormInput) => {
  return Axios.post<Recipe>(`recipes`, recipe)
}

export const updateRecipe = (id: string, recipe: RecipesFormInput) => {
  return Axios.put<Recipe>(`recipes/${id}`, recipe)
}

export const deleteRecipe = (id: string) => {
  return Axios.delete(`recipes/${id}`)
}
