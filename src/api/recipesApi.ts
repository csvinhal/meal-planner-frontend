import { Recipe, RecipesInput } from '@models/recipes/recipe'
import Axios from './requestsConfig'

export const getRecipes = () => {
  return Axios.get<Recipe[]>(`recipes`)
}

export const getRecipe = (id: string) => {
  return Axios.get<Recipe>(`recipes/${id}`)
}

export const createRecipe = ({
  recipeName,
  description,
  recipeImage,
}: RecipesInput) => {
  const formData = new FormData()
  formData.append('recipeName', recipeName)
  formData.append('description', description)
  formData.append('recipeImage', recipeImage as File)
  return Axios.post<Recipe>(`recipes`, formData)
}

export const updateRecipe = (
  id: string,
  { recipeName, description, recipeImage }: RecipesInput,
) => {
  const formData = new FormData()
  formData.append('recipeName', recipeName)
  formData.append('description', description)
  formData.append('recipeImage', recipeImage as File)
  return Axios.put<Recipe>(`recipes/${id}`, formData)
}

export const deleteRecipe = (id: string) => {
  return Axios.delete(`recipes/${id}`)
}
