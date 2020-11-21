import { Recipe } from '@models/recipes/recipe'
import { useCallback, useReducer } from 'react'
import { deleteRecipe, getRecipes } from '@api/recipesApi'

export interface State {
  loading: boolean
  recipes: Recipe[]
  error: string
}

// Action Types

export const RECIPES_REQUEST = 'RECIPES_REQUEST'
export const RECIPES_REQUEST_FAILURE = 'RECIPES_REQUEST_FAILURE'
export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS'
export const DELETE_RECIPES_SUCCESS = 'DELETE_RECIPES_SUCCESS'

interface GetRecipesRequestAction {
  type: typeof RECIPES_REQUEST
}

interface GetRecipesFailureAction {
  type: typeof RECIPES_REQUEST_FAILURE
  payload: { error: string }
}

interface GetRecipesSuccessAction {
  type: typeof GET_RECIPES_SUCCESS
  payload: { recipes: Recipe[] }
}

export type RecipesActionTypes =
  | GetRecipesRequestAction
  | GetRecipesFailureAction
  | GetRecipesSuccessAction

// Reducer

const initialState: State = {
  loading: false,
  recipes: [],
  error: '',
}

const handleRecipesRequest = (state: State) => {
  return {
    ...state,
    loading: true,
  }
}

const handleRecipesFailure = (
  state: State,
  action: GetRecipesFailureAction,
) => {
  return {
    ...state,
    loading: false,
    error: action.payload.error,
  }
}

const handleRecipesSuccess = (
  state: State,
  action: GetRecipesSuccessAction,
) => ({
  ...state,
  loading: false,
  recipes: action.payload.recipes,
})

export const reducer = (state: State, action: RecipesActionTypes): State => {
  switch (action.type) {
    case RECIPES_REQUEST:
      return handleRecipesRequest(state)
    case RECIPES_REQUEST_FAILURE:
      return handleRecipesFailure(state, action)
    case GET_RECIPES_SUCCESS:
      return handleRecipesSuccess(state, action)
    default:
      return state
  }
}

// Action Creators
export const getRecipesRequest = (): RecipesActionTypes => ({
  type: RECIPES_REQUEST,
})

export const recipesFailureRequest = (error: string): RecipesActionTypes => ({
  type: RECIPES_REQUEST_FAILURE,
  payload: { error },
})

export const getRecipesSuccess = (recipes: Recipe[]): RecipesActionTypes => ({
  type: GET_RECIPES_SUCCESS,
  payload: { recipes },
})

const useRecipesHooks = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchRecipes = useCallback(async () => {
    try {
      dispatch(getRecipesRequest())
      const data = await getRecipes()
      dispatch(getRecipesSuccess(data.data))
    } catch (err) {
      dispatch(recipesFailureRequest(err.error))
    }
  }, [dispatch])

  const deleteAndRefetch = async (id: string) => {
    try {
      dispatch(getRecipesRequest())
      await deleteRecipe(id)
      const data = await getRecipes()
      dispatch(getRecipesSuccess(data.data))
    } catch (err) {
      dispatch(recipesFailureRequest(err.error))
    }
  }

  return {
    state,
    effect: {
      fetchRecipes,
      deleteAndRefetch,
    },
  }
}

export default useRecipesHooks
