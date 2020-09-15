import Layout from '@containers/Layout'
import { actions as loaderActions } from '@reducers/loading'
import { actions as toastActions } from '@reducers/toast'
import { deleteRecipe, getRecipes } from '@shared/recipesApi'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import openDialog from '../../../services/dialogService'
import RecipeEmptyState from '../components/RecipeEmptyState'
import RecipeList from '../components/RecipeList'

const RecipesListPage = () => {
  const [recipes, setRecipes] = useState([])
  const dispatch = useDispatch()
  const history = useHistory()

  const fetchRecipes = useCallback(async () => {
    dispatch(loaderActions.showLoader())
    const { data } = await getRecipes()
    setRecipes(data)
    dispatch(loaderActions.closeLoader())
  }, [dispatch])

  useEffect(() => {
    fetchRecipes()
  }, [fetchRecipes])

  const handlerAdd = useCallback(() => {
    history.push('/recipes/add')
  }, [history])

  const handleRemove = useCallback(
    async (id) => {
      const confirmed = await openDialog()
      if (confirmed) {
        dispatch(loaderActions.showLoader())
        await deleteRecipe(id)
        dispatch(
          toastActions.showMessage({
            severity: 'success',
            message: 'Receita deletada com sucesso!',
          }),
        )
        await fetchRecipes()
        dispatch(loaderActions.closeLoader())
      }
    },
    [fetchRecipes, dispatch],
  )

  const content = recipes?.length ? (
    <RecipeList
      recipes={recipes}
      handlerAdd={handlerAdd}
      handleRemove={handleRemove}
    />
  ) : (
    <RecipeEmptyState handlerAdd={handlerAdd} />
  )

  return <Layout>{content}</Layout>
}

export default RecipesListPage
