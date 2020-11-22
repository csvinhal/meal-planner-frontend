import Layout from '@components/Layout/Layout'
import Toast from '@components/Toast/Toast'
import { RecipesInput } from '@models/recipes'
import { useLoaderEffects } from '@providers/Loader'
import { useToastEffects } from '@providers/Toast'
import React, { useCallback, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import RecipeFormLoader from '../components/RecipeFormLoader/RecipeFormLoader'
import RecipesForm from '../components/RecipesForm/RecipesForm'
import useRecipeHooks from '../hooks/recipe-hooks'

const RecipesFormContainer = () => {
  const {
    state: { loading, recipe },
    effect: { fetchRecipe, submitRecipe },
  } = useRecipeHooks()
  const { showToast } = useToastEffects()
  const { showLoader, closeLoader } = useLoaderEffects()
  const history = useHistory()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (id) {
      fetchRecipe(id)
    }
  }, [id, fetchRecipe])

  const handleSubmit = useCallback(
    async (form: RecipesInput) => {
      showLoader()

      await submitRecipe(form, id)
      showToast({
        severity: 'success',
        message: 'Receita salva com sucesso!',
      })
      closeLoader()
      history.push('/recipes')
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
