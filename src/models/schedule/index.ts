import { Meal, MealType } from '@models/meals'

export interface ScheduleDaysOfWeek {
  [x: string]: Meal | null
}

export interface Schedule {
  [MealType.BREAKFAST]: ScheduleDaysOfWeek
  [MealType.SNACK]: ScheduleDaysOfWeek
  [MealType.LUNCH]: ScheduleDaysOfWeek
  [MealType.AFTERNOON_SNACK]: ScheduleDaysOfWeek
  [MealType.DINNER]: ScheduleDaysOfWeek
  [MealType.SUPPER]: ScheduleDaysOfWeek
}
