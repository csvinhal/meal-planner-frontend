export interface Recipe {
  _id?: string
  recipeName: string
  description: string
  recipeImage: string
}

export interface RecipesInput {
  recipeName: string
  description: string
  recipeImage?: File
}

export interface RecipesFormInput {
  recipeName: string
  description: string
}
