import { takeEvery } from "redux-saga/effects";
import { types as recipeTypes } from "../reducers/recipe";
import { fetchAllRecipesStart } from "./recipe";

export default function* watchAuth() {
  yield takeEvery(recipeTypes.FETCH_ALL_RECIPES_REQUEST, fetchAllRecipesStart);
}
