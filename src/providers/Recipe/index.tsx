import { createRecipe, getRecipe, updateRecipe } from '@api/recipesApi'
import { Recipe, RecipesInput, RecipeState } from '@models/recipes'
import constate from 'constate'
import { useCallback, useState } from 'react'

const useRecipesHook = () => {
  const [state, setState] = useState<RecipeState>({
    loading: false,
    recipe: {} as Recipe,
    error: null,
  })

  const fetchRecipe = useCallback(async (id: string) => {
    try {
      setState((currentState) => ({ ...currentState, loading: true }))
      const { data } = await getRecipe(id)
      setState((currentState) => ({
        ...currentState,
        loading: false,
        recipe: data,
      }))
    } catch (e) {
      setState((currentState) => ({
        ...currentState,
        loading: false,
        error: e,
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
      fetchRecipe,
      submitRecipe,
    },
  }
}

const [RecipeProvider, useRecipeState, useRecipeEffects] = constate(
  useRecipesHook,
  (value) => value.state,
  (value) => value.effects,
)

export { RecipeProvider, useRecipeState, useRecipeEffects }
