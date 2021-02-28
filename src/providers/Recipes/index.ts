import { deleteRecipe, getRecipes } from '@api/recipesApi'
import { Recipe, RecipesParamsInput, RecipesState } from '@models/recipes'
import constate from 'constate'
import { useCallback, useState } from 'react'

const useRecipesHook = () => {
  const [state, setState] = useState<RecipesState>({
    loading: false,
    recipes: [] as Recipe[],
    error: null,
  })

  const fetchRecipes = useCallback(async (params?: RecipesParamsInput) => {
    try {
      setState((currentState) => ({ ...currentState, loading: true }))
      const { data } = await getRecipes(params)
      setState((currentState) => ({
        ...currentState,
        loading: false,
        recipes: data,
      }))
    } catch (e) {
      setState((currentState) => ({
        ...currentState,
        loading: false,
        error: e,
      }))
    }
  }, [])

  const deleteAndRefetch = useCallback(async (id: string) => {
    try {
      setState((currentState) => ({ ...currentState, loading: true }))
      await deleteRecipe(id)
      const { data } = await getRecipes()
      setState((currentState) => ({
        ...currentState,
        loading: false,
        recipes: data,
      }))
    } catch (err) {
      setState((currentState) => ({
        ...currentState,
        loading: false,
        error: err,
      }))
    }
  }, [])

  return {
    state,
    effects: {
      fetchRecipes,
      deleteAndRefetch,
    },
  }
}

const [RecipesProvider, useRecipesState, useRecipesEffects] = constate(
  useRecipesHook,
  (value) => value.state,
  (value) => value.effects,
)

export { RecipesProvider, useRecipesState, useRecipesEffects }
