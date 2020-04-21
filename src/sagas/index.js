import { takeEvery } from "redux-saga/effects";
import { types as recipeTypes } from "../reducers/recipe";
import {
  createRecipeStart,
  fetchAllRecipesStart,
  getRecipeStart,
  updateRecipeStart,
  deleteRecipeStart,
} from "./recipe";

export default function* watchAuth() {
  yield takeEvery(recipeTypes.FETCH_ALL_RECIPES_REQUEST, fetchAllRecipesStart);
  yield takeEvery(recipeTypes.GET_RECIPE_REQUEST, getRecipeStart);
  yield takeEvery(recipeTypes.CREATE_RECIPE_REQUEST, createRecipeStart);
  yield takeEvery(recipeTypes.UPDATE_RECIPE_REQUEST, updateRecipeStart);
  yield takeEvery(recipeTypes.DELETE_RECIPE_REQUEST, deleteRecipeStart);
}
