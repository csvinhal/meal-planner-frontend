import { takeEvery } from "redux-saga/effects";
import { types as recipeTypes } from "../reducers/recipe";
import { fetchAllRecipesStart, getRecipeStart } from "./recipe";

export default function* watchAuth() {
  yield takeEvery(recipeTypes.FETCH_ALL_RECIPES_REQUEST, fetchAllRecipesStart);
  yield takeEvery(recipeTypes.GET_RECIPE_REQUEST, getRecipeStart);
}
