import FetchLoading from '@components/FetchLoading'
import Layout from '@containers/Layout'
import { actions as toastActions } from '@reducers/toast'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import openDialog from '../../../services/dialogService'
import RecipeEmptyState from '../components/RecipeEmptyState'
import RecipeList from '../components/RecipeList'
import useRecipesHooks from '../hooks'

const RecipesListPage = () => {
  const {
    state: { loading, recipes },
    effect: { deleteAndRefetch },
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

  let content

  if (loading) {
    content = <FetchLoading />
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
