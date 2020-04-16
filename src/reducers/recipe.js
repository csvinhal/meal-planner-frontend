export const types = {
  FETCH_ALL_RECIPES_REQUEST: "[Recipe] Fetch all resumes requested",
  FETCH_ALL_RECIPES_SUCCEEDED: "[Recipe] Fetch all resumes succeeded",
  FETCH_ALL_RECIPES_FAILED: "[Recipe] Fetch all resumes failed",
};

const initialState = {
  items: [],
  removeId: null,
};

const fetchAllRecipesRequest = (state) => ({
  ...state,
});

const fetchAllRecipesSuccess = (state, action) => ({
  ...state,
  items: [...action.resumes],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_RECIPES_REQUEST:
      return fetchAllRecipesRequest(state);
    case types.FETCH_ALL_RECIPES_SUCCEEDED:
      return fetchAllRecipesSuccess(state, action);
    case types.FETCH_ALL_RECIPES_FAILED:
    default:
      return state;
  }
};

export const actions = {
  fetchAllRecipesStart: () => ({
    type: types.FETCH_ALL_RECIPES_REQUEST,
  }),
  fetchAllRecipesSucceeded: (resumes) => ({
    type: types.FETCH_ALL_RECIPES_SUCCEEDED,
    resumes,
  }),
  fetchAllRecipesFailed: (error) => ({
    type: types.FETCH_ALL_RECIPES_FAILED,
    error,
  }),
};
