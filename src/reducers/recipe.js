export const types = {
  FETCH_ALL_RECIPES_REQUEST: "[Recipe] Fetch all recipes requested",
  FETCH_ALL_RECIPES_SUCCEEDED: "[Recipe] Fetch all recipes succeeded",
  FETCH_ALL_RECIPES_FAILED: "[Recipe] Fetch all recipes failed",
  GET_RECIPE_REQUEST: "[Recipe] Get a recipe requested",
  GET_RECIPE_SUCCEEDED: "[Recipe] Get a recipe succeeded",
  GET_RECIPE_FAILED: "[Recipe] Fetch a recipe failed",
};

const fetchAllRecipesSucceeded = (state, action) => ({
  ...state,
  items: [...action.recipes],
});

const getRecipeSucceeded = (state, action) => ({
  ...state,
  item: action.recipe,
});

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_ALL_RECIPES_SUCCEEDED:
      return fetchAllRecipesSucceeded(state, action);
    case types.GET_RECIPE_SUCCEEDED:
      return getRecipeSucceeded(state, action);
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
};
