import {
  createRecipe,
  deleteRecipe,
  getRecipes,
  updateRecipe,
} from '@api/recipesApi'
import { Recipe, RecipesInput, RecipesState } from '@models/recipes'
import constate from 'constate'
import { useCallback, useState } from 'react'

const useRecipesHook = () => {
  const [state, setState] = useState<RecipesState>({
    loading: false,
    recipes: [] as Recipe[],
    error: null,
  })

  const fetchRecipes = useCallback(async () => {
    try {
      setState((currentState) => ({ ...currentState, loading: true }))
      const { data } = await getRecipes()
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

  const submitRecipe = useCallback(
    async (recipe: RecipesInput, id?: string) => {
      try {
        setState((currentState) => ({ ...currentState, loading: true }))
        if (id) {
          await updateRecipe(id, recipe)
        } else {
          await createRecipe(recipe)
        }
        setState((currentState) => ({
          ...currentState,
          loading: false,
        }))
      } catch (err) {
        setState((currentState) => ({ ...currentState, error: err }))
      }
    },
    [],
  )

  return {
    state,
    effects: {
      fetchRecipes,
      deleteAndRefetch,
      submitRecipe,
    },
  }
}

const [RecipesProvider, useRecipesState, useRecipesEffects] = constate(
  useRecipesHook,
  (value) => value.state,
  (value) => value.effects,
)

export { RecipesProvider, useRecipesState, useRecipesEffects }
