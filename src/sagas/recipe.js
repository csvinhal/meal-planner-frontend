import { call, put } from "redux-saga/effects";
import { actions as loadingActions } from "../reducers/loading";
import { actions } from "../reducers/recipe";
import { actions as toastActions } from "../reducers/toast";
import {
  createRecipe,
  fetchAllRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
} from "../shared/recipesApi";

export function* fetchAllRecipesStart() {
  try {
    yield put(loadingActions.showLoader());
    const response = yield call(fetchAllRecipes);
    yield put(actions.fetchAllRecipesSucceeded(response.data.results));
  } catch (err) {
    yield put(actions.fetchAllRecipesFailed());
    yield put(
      toastActions.showMessage({
        severity: "error",
        message: "Ocorreu um erro ao buscar receitas",
      })
    );
  } finally {
    yield put(loadingActions.closeLoader());
  }
}

export function* getRecipeStart(action) {
  try {
    yield put(loadingActions.showLoader());
    const response = yield call(getRecipe, action.payload);
    yield put(actions.getRecipeSucceeded(response.data.result));
  } catch (err) {
    yield put(actions.getRecipeFailed(err.response.data));
    yield put(
      toastActions.showMessage({
        severity: "error",
        message: "Ocorreu um erro ao buscar a receita",
      })
    );
  } finally {
    yield put(loadingActions.closeLoader());
  }
}

export function* createRecipeStart(action) {
  try {
    yield put(loadingActions.showLoader());
    const response = yield call(createRecipe, action.payload.item);
    yield call(action.payload.history.push, "/recipes");
    yield put(actions.createRecipeSucceeded(response.data.result));
    yield put(
      toastActions.showMessage({
        severity: "success",
        message: "Receita salva com sucesso",
      })
    );
  } catch (err) {
    yield put(actions.createRecipeFailed(err.response.data));
    yield put(
      toastActions.showMessage({
        severity: "error",
        message: "Ocorreu um erro ao salvar a receita",
      })
    );
  } finally {
    yield put(loadingActions.closeLoader());
  }
}

export function* updateRecipeStart(action) {
  try {
    yield put(loadingActions.showLoader());
    const response = yield call(
      updateRecipe,
      action.payload.item.id,
      action.payload.item
    );
    yield call(action.payload.history.push, "/recipes");
    yield put(actions.updateRecipeSucceeded(response.data.result));
    yield put(
      toastActions.showMessage({
        severity: "success",
        message: "Receita salva com sucesso",
      })
    );
  } catch (err) {
    yield put(actions.updateRecipeFailed(err.response.data));
    yield put(
      toastActions.showMessage({
        severity: "error",
        message: "Ocorreu um erro ao salvar a receita",
      })
    );
  } finally {
    yield put(loadingActions.closeLoader());
  }
}

export function* deleteRecipeStart(action) {
  try {
    yield put(loadingActions.showLoader());
    yield call(deleteRecipe, action.payload.id);
    yield call(action.payload.history.push, "/recipes");
    yield put(actions.deleteRecipeSucceeded());
    yield put(
      toastActions.showMessage({
        severity: "success",
        message: "Receita deletada com sucesso",
      })
    );
  } catch (err) {
    yield put(actions.deleteRecipeFailed(err.response.data));
    yield put(
      toastActions.showMessage({
        severity: "error",
        message: "Ocorreu um erro ao salvar a receita",
      })
    );
  } finally {
    yield put(loadingActions.closeLoader());
  }
}
