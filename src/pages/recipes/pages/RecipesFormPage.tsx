import Layout from '@containers/Layout'
import { Recipe, RecipesFormInput } from '@models/recipes'
import { actions as loaderActions } from '@reducers/loading'
import { actions as toastActions } from '@reducers/toast'
import { createRecipe, getRecipe, updateRecipe } from '@shared/recipesApi'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import RecipesForm from '../components/RecipesForm'

const RecipesFormPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [recipe, setRecipe] = useState<Recipe>()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const fetchRecipe = async () => {
      dispatch(loaderActions.showLoader())
      if (id) {
        const { data } = await getRecipe(id)
        setRecipe(data)
      }
      dispatch(loaderActions.closeLoader())
    }
    fetchRecipe()
  }, [id, setRecipe, dispatch])

  const handleSubmit = useCallback(
    async (form: RecipesFormInput) => {
      dispatch(loaderActions.showLoader())
      if (id) {
        await updateRecipe(id, form)
        dispatch(
          toastActions.showMessage({
            severity: 'success',
            message: 'Receita atualizada com sucesso!',
          }),
        )
      } else {
        await createRecipe(form)
        dispatch(
          toastActions.showMessage({
            severity: 'success',
            message: 'Receita salva com sucesso!',
          }),
        )
      }
      dispatch(loaderActions.closeLoader())
      history.push('/recipes')
    },
    [id, dispatch, history],
  )

  const handleGoBack = useCallback(() => {
    history.push('/recipes')
  }, [history])

  return (
    <Layout>
      <RecipesForm
        recipe={recipe}
        onGoBack={handleGoBack}
        onSubmit={handleSubmit}
      />
    </Layout>
  )
}

export default RecipesFormPage
