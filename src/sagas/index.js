import { takeEvery } from "redux-saga/effects";
import { types as recipeTypes } from "../reducers/recipe";
import {
  onCreateRecipe,
  onFetchAllRecipes,
  onGetRecipe,
  onUpdateRecipe,
  onDeleteRecipe,
  onDeleteRecipeSucceeded
} from "./recipe";

export default function* watchAuth() {
  yield takeEvery(recipeTypes.FETCH_ALL_RECIPES_REQUEST, onFetchAllRecipes);
  yield takeEvery(recipeTypes.GET_RECIPE_REQUEST, onGetRecipe);
  yield takeEvery(recipeTypes.CREATE_RECIPE_REQUEST, onCreateRecipe);
  yield takeEvery(recipeTypes.UPDATE_RECIPE_REQUEST, onUpdateRecipe);
  yield takeEvery(recipeTypes.DELETE_RECIPE_REQUEST, onDeleteRecipe);
  yield takeEvery(recipeTypes.DELETE_RECIPE_SUCCEEDED, onDeleteRecipeSucceeded);
}
