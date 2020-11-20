import { Recipe } from '@models/recipes/recipe'

export interface Meal {
  _id: string
  date: string
  mealType: number
  recipe: Recipe
  createAt: string
  updatedAt: string
}

export enum MealType {
  'BREAKFAST' = 0,
  'SNACK' = 1,
  'LUNCH' = 2,
  'AFTERNOON_SNACK' = 3,
  'DINNER' = 4,
  'SUPPER' = 5,
}
