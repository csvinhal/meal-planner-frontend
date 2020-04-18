import { fromJS } from "immutable";

export const types = {
  FETCH_ALL_RECIPES_REQUEST: "[Recipe] Fetch all recipes requested",
  FETCH_ALL_RECIPES_SUCCEEDED: "[Recipe] Fetch all recipes succeeded",
  FETCH_ALL_RECIPES_FAILED: "[Recipe] Fetch all recipes failed",
  GET_RECIPE_REQUEST: "[Recipe] Get a recipe requested",
  GET_RECIPE_SUCCEEDED: "[Recipe] Get a recipe succeeded",
  GET_RECIPE_FAILED: "[Recipe] Fetch a recipe failed",
  CREATE_RECIPE_REQUEST: "[Recipe] Create a recipe requested",
  CREATE_RECIPE_SUCCEEDED: "[Recipe] Create a recipe succeeded",
  CREATE_RECIPE_FAILED: "[Recipe] Create a recipe failed",
  UPDATE_RECIPE_REQUEST: "[Recipe] Update a recipe requested",
  UPDATE_RECIPE_SUCCEEDED: "[Recipe] Update a recipe succeeded",
  UPDATE_RECIPE_FAILED: "[Recipe] Update a recipe failed",
};

const initialState = fromJS({
  items: [],
  item: {},
});

const fetchAllRecipesSucceeded = (state, action) => {
  return state.set("items", fromJS(action.recipes));
};

const getRecipeSucceeded = (state, action) => {
  return state.set("item", fromJS(action.recipe));
};

const createRecipeSucceeded = (state, action) => {
  return state.set("item", fromJS(action.recipe));
};

const updateRecipeSucceeded = (state, action) => {
  return state.set("item", fromJS(action.recipe));
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_RECIPES_SUCCEEDED:
      return fetchAllRecipesSucceeded(state, action);
    case types.GET_RECIPE_SUCCEEDED:
      return getRecipeSucceeded(state, action);
    case types.CREATE_RECIPE_SUCCEEDED:
      return createRecipeSucceeded(state, action);
    case types.UPDATE_RECIPE_SUCCEEDED:
      return updateRecipeSucceeded(state, action);
    default:
      return state;
  }
};

export const actions = {
  fetchAllRecipes: () => ({
    type: types.FETCH_ALL_RECIPES_REQUEST,
  }),
  fetchAllRecipesSucceeded: (recipes) => ({
    type: types.FETCH_ALL_RECIPES_SUCCEEDED,
    recipes,
  }),
  fetchAllRecipesFailed: () => ({
    type: types.FETCH_ALL_RECIPES_FAILED,
  }),
  getRecipe: (id) => ({
    type: types.GET_RECIPE_REQUEST,
    id,
  }),
  getRecipeSucceeded: (recipe) => ({
    type: types.GET_RECIPE_SUCCEEDED,
    recipe,
  }),
  getRecipeFailed: () => ({
    type: types.GET_RECIPE_FAILED,
  }),
  createRecipe: (recipe) => ({
    type: types.CREATE_RECIPE_REQUEST,
    recipe,
  }),
  createRecipeSucceeded: (recipe) => ({
    type: types.CREATE_RECIPE_SUCCEEDED,
    recipe,
  }),
  createRecipeFailed: () => ({
    type: types.CREATE_RECIPE_FAILED,
  }),
  updateRecipe: (recipe) => ({
    type: types.UPDATE_RECIPE_REQUEST,
    recipe,
  }),
  updateRecipeSucceeded: (recipe) => ({
    type: types.UPDATE_RECIPE_SUCCEEDED,
    recipe,
  }),
  updateRecipeFailed: () => ({
    type: types.UPDATE_RECIPE_FAILED,
  }),
};
