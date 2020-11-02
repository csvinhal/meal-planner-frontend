import Layout from '@containers/Layout'
import { RecipesFormInput } from '@models/recipes'
import { actions as loaderActions } from '@reducers/loading'
import { actions as toastActions } from '@reducers/toast'
import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import RecipeFormLoader from '../components/RecipeFormLoader'
import RecipesForm from '../components/RecipesForm'
import useRecipeHooks from '../hooks/recipe-hooks'

const RecipesFormPage = () => {
  const dispatch = useDispatch()
  const {
    state: { loading, recipe },
    effect: { fetchRecipe, submitRecipe },
  } = useRecipeHooks()
  const history = useHistory()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (id) {
      fetchRecipe(id)
    }
  }, [id, fetchRecipe])

  const handleSubmit = useCallback(
    async (form: RecipesFormInput) => {
      dispatch(loaderActions.showLoader())

      await submitRecipe(form, id)
      dispatch(
        toastActions.showMessage({
          severity: 'success',
          message: 'Receita salva com sucesso!',
        }),
      )
      dispatch(loaderActions.closeLoader())
      history.push('/recipes')
    },
    [id, dispatch, history, submitRecipe],
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

  return <Layout>{content}</Layout>
}

export default RecipesFormPage
