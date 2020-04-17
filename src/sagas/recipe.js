import { call, put } from "redux-saga/effects";
import { actions } from "../reducers/recipe";
import { actions as loadingActions } from "../reducers/loading";
import { fetchAllRecipes, getRecipe } from "../shared/recipesApi";

export function* fetchAllRecipesStart() {
  try {
    yield loadingActions.showLoader();
    const response = yield call(fetchAllRecipes);
    yield put(actions.fetchAllRecipesSucceeded(response.data.results));
  } catch (err) {
    yield put(actions.fetchAllRecipesFailed());
  } finally {
    yield loadingActions.closeLoader();
  }
}

export function* getRecipeStart(action) {
  try {
    yield loadingActions.showLoader();
    const response = yield call(getRecipe, action.id);
    yield put(actions.getRecipeSucceeded(response.data.result));
  } catch (err) {
    yield put(actions.getRecipeFailed(err.response.data));
  } finally {
    yield loadingActions.closeLoader();
  }
}

export default {};
