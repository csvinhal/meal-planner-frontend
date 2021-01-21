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

export interface RecipesParamsInput {
  recipeName?: string
}

export interface RecipesFormInput {
  recipeName: string
  description: string
  recipeImage: FileList
}

export interface RecipesState {
  recipes: Recipe[]
  loading: boolean
  error: any
}

export interface RecipeState {
  recipe: Recipe
  loading: boolean
  error: any
}