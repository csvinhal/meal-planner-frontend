import { fromJS } from "immutable";

export const types = {
  RECIPE_PAGE_LOADED: "[Recipe] page loaded",
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
  DELETE_RECIPE_REQUEST: "[Recipe] Delete a recipe requested",
  DELETE_RECIPE_SUCCEEDED: "[Recipe] Delete a recipe succeeded",
  DELETE_RECIPE_FAILED: "[Recipe] Delete a recipe failed",
};

const initialState = fromJS({
  items: [],
  item: {},
  history: null,
});

// eslint-disable-next-line no-unused-vars
const pageLoaded = (state) => (state = initialState);

const fetchAllRecipesSucceeded = (state, action) => {
  return state.set("items", fromJS(action.payload));
};

const getRecipeSucceeded = (state, action) => {
  return state.set("item", fromJS(action.payload));
};

const createRecipeSucceeded = (state, action) => {
  return state.set("item", fromJS(action.payload));
};

const updateRecipeSucceeded = (state, action) => {
  return state.set("item", fromJS(action.payload));
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.RECIPE_PAGE_LOADED:
      return pageLoaded(state);
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
  pageLoaded: () => ({
    type: types.RECIPE_PAGE_LOADED,
  }),
  fetchAllRecipes: () => ({
    type: types.FETCH_ALL_RECIPES_REQUEST,
  }),
  fetchAllRecipesSucceeded: (payload) => ({
    type: types.FETCH_ALL_RECIPES_SUCCEEDED,
    payload,
  }),
  fetchAllRecipesFailed: () => ({
    type: types.FETCH_ALL_RECIPES_FAILED,
  }),
  getRecipe: (payload) => ({
    type: types.GET_RECIPE_REQUEST,
    payload,
  }),
  getRecipeSucceeded: (payload) => ({
    type: types.GET_RECIPE_SUCCEEDED,
    payload,
  }),
  getRecipeFailed: () => ({
    type: types.GET_RECIPE_FAILED,
  }),
  createRecipe: (payload) => ({
    type: types.CREATE_RECIPE_REQUEST,
    payload,
  }),
  createRecipeSucceeded: (payload) => ({
    type: types.CREATE_RECIPE_SUCCEEDED,
    payload,
  }),
  createRecipeFailed: () => ({
    type: types.CREATE_RECIPE_FAILED,
  }),
  updateRecipe: (payload) => ({
    type: types.UPDATE_RECIPE_REQUEST,
    payload,
  }),
  updateRecipeSucceeded: (payload) => ({
    type: types.UPDATE_RECIPE_SUCCEEDED,
    payload,
  }),
  updateRecipeFailed: () => ({
    type: types.UPDATE_RECIPE_FAILED,
  }),
  deleteRecipe: (payload) => ({
    type: types.DELETE_RECIPE_REQUEST,
    payload,
  }),
  deleteRecipeSucceeded: () => ({
    type: types.DELETE_RECIPE_SUCCEEDED,
  }),
  deleteRecipeFailed: () => ({
    type: types.DELETE_RECIPE_FAILED,
  }),
};
