import Layout from '@components/Layout/Layout'
import Toast from '@components/Toast/Toast'
import { RecipesInput } from '@models/recipes'
import { useLoaderEffects } from '@providers/Loader'
import { useRecipeEffects, useRecipeState } from '@providers/Recipe'
import { useToastEffects } from '@providers/Toast'
import React, { useCallback, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import RecipeFormLoader from '../components/RecipeFormLoader/RecipeFormLoader'
import RecipesForm from '../components/RecipesForm/RecipesForm'

const RecipesFormContainer = () => {
  const { loading, recipe } = useRecipeState()
  const { fetchRecipe, submitRecipe } = useRecipeEffects()
  const { id } = useParams<{ id: string }>()
  const { showToast } = useToastEffects()
  const { showLoader, closeLoader } = useLoaderEffects()
  const history = useHistory()

  useEffect(() => {
    fetchRecipe(id)
  }, [fetchRecipe, id])

  const handleSubmit = useCallback(
    async (form: RecipesInput) => {
      try {
        showLoader()
        await submitRecipe(form, id)
        showToast({
          severity: 'success',
          message: 'Receita salva com sucesso!',
        })

        history.push('/recipes')
      } catch (e) {
        showToast({
          severity: 'error',
          message: e.message,
        })
      }
      closeLoader()
    },
    [id, history, submitRecipe, showToast, showLoader, closeLoader],
  )

  const handleGoBack = useCallback(() => {
    history.push('/recipes')
  }, [history])

  let content

  if (loading) {
    content = <RecipeFormLoader />
  } else {
    content = (
      <RecipesForm
        recipe={recipe}
        onGoBack={handleGoBack}
        onSubmit={handleSubmit}
      />
    )
  }

  return (
    <Layout>
      {content}
      <Toast />
    </Layout>
  )
}

export default RecipesFormContainer
