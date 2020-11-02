import { Recipe } from '@models/recipes'
import { createRecipe, getRecipe, updateRecipe } from '@shared/recipesApi'
import { useCallback, useReducer } from 'react'

export interface State {
  loading: boolean
  recipe?: Recipe
  error: string
}

// Action Types

export const RECIPE_REQUEST = 'RECIPE_REQUEST'
export const RECIPE_REQUEST_FAILURE = 'RECIPE_REQUEST_FAILURE'
export const RECIPE_REQUEST_SUCCESS = 'RECIPE_REQUEST_SUCCESS'

interface GetRecipeRequestAction {
  type: typeof RECIPE_REQUEST
}

interface GetRecipeFailureAction {
  type: typeof RECIPE_REQUEST_FAILURE
  payload: { error: string }
}

interface GetRecipeSuccessAction {
  type: typeof RECIPE_REQUEST_SUCCESS
  payload: { recipe: Recipe }
}

export type RecipeActionTypes =
  | GetRecipeRequestAction
  | GetRecipeFailureAction
  | GetRecipeSuccessAction

// Reducer

const initialState: State = {
  loading: false,
  recipe: undefined,
  error: '',
}

const handleRecipeRequest = (state: State): State => {
  return {
    ...state,
    loading: true,
  }
}

const handleRecipeFailure = (
  state: State,
  action: GetRecipeFailureAction,
): State => {
  return {
    ...state,
    loading: false,
    error: action.payload.error,
  }
}

const handleRecipeSuccess = (
  state: State,
  action: GetRecipeSuccessAction,
): State => ({
  ...state,
  loading: false,
  recipe: action.payload.recipe,
})

export const reducer = (state: State, action: RecipeActionTypes): State => {
  switch (action.type) {
    case RECIPE_REQUEST:
      return handleRecipeRequest(state)
    case RECIPE_REQUEST_FAILURE:
      return handleRecipeFailure(state, action)
    case RECIPE_REQUEST_SUCCESS:
      return handleRecipeSuccess(state, action)
    default:
      return state
  }
}

// Action Creators
export const getRecipeRequest = (): RecipeActionTypes => ({
  type: RECIPE_REQUEST,
})

export const recipeFailureRequest = (error: string): RecipeActionTypes => ({
  type: RECIPE_REQUEST_FAILURE,
  payload: { error },
})

export const getRecipeSuccess = (recipe: Recipe): RecipeActionTypes => ({
  type: RECIPE_REQUEST_SUCCESS,
  payload: { recipe },
})

const useRecipeHooks = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchRecipe = useCallback(
    async (id: string) => {
      try {
        dispatch(getRecipeRequest())
        const data = await getRecipe(id)
        dispatch(getRecipeSuccess(data.data))
      } catch (err) {
        dispatch(recipeFailureRequest(err.error))
      }
    },
    [dispatch],
  )

  const submitRecipe = useCallback(async (recipe: Recipe, id?: string) => {
    if (id) {
      await updateRecipe(id, recipe)
    } else {
      await createRecipe(recipe)
    }
  }, [])

  return {
    state,
    effect: {
      fetchRecipe,
      submitRecipe,
    },
  }
}

export default useRecipeHooks
