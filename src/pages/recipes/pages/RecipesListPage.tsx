import Layout from '@containers/Layout'
import { actions as toastActions } from '@reducers/toast'
import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import openDialog from '../../../services/dialogService'
import RecipeEmptyState from '../components/RecipeEmptyState'
import RecipeList from '../components/RecipeList'
import RecipeListLoader from '../components/RecipeListLoader'
import useRecipesHooks from '../hooks/recipes-hooks'

const RecipesListPage = () => {
  const {
    state: { loading, recipes },
    effect: { fetchRecipes, deleteAndRefetch },
  } = useRecipesHooks()
  const history = useHistory()
  const dispatch = useDispatch()

  const handlerAdd = useCallback(() => {
    history.push('/recipes/add')
  }, [history])

  const handleRemove = useCallback(
    async (id) => {
      const confirmed = await openDialog()
      if (confirmed) {
        await deleteAndRefetch(id)
        dispatch(
          toastActions.showMessage({
            severity: 'success',
            message: 'Receita deletada com sucesso!',
          }),
        )
      }
    },
    [deleteAndRefetch, dispatch],
  )

  useEffect(() => {
    fetchRecipes()
  }, [fetchRecipes])

  let content

  if (loading) {
    content = <RecipeListLoader />
  } else if (recipes?.length) {
    content = (
      <RecipeList
        recipes={recipes}
        handlerAdd={handlerAdd}
        handleRemove={handleRemove}
      />
    )
  } else {
    content = <RecipeEmptyState handlerAdd={handlerAdd} />
  }

  return <Layout>{content}</Layout>
}

export default RecipesListPage
