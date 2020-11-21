import DeleteDialog from '@components/DeleteDialog/DeleteDialog'
import { useDeleteDialogEffects } from '@providers/DeleteDialog'
import { actions as toastActions } from '@reducers/toast'
import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import RecipeEmptyState from '../components/RecipeEmptyState'
import RecipeList from '../components/RecipeList'
import RecipeListLoader from '../components/RecipeListLoader'
import useRecipesHooks from '../hooks/recipes-hooks'

const RecipesContainer = () => {
  const {
    state: { loading, recipes },
    effect: { fetchRecipes, deleteAndRefetch },
  } = useRecipesHooks()
  const history = useHistory()
  const dispatch = useDispatch()
  const { showDialog, closeDialog } = useDeleteDialogEffects()

  const handlerAdd = useCallback(() => {
    history.push('/recipes/add')
  }, [history])

  const handleConfirmDelete = useCallback(
    async (id) => {
      await deleteAndRefetch(id)
      dispatch(
        toastActions.showMessage({
          severity: 'success',
          message: 'Receita deletada com sucesso!',
        }),
      )
      closeDialog()
    },
    [deleteAndRefetch, dispatch, closeDialog],
  )

  const handleRemove = useCallback(
    async (id) => {
      showDialog({
        handleConfirm: () => handleConfirmDelete(id),
        handleCancel: closeDialog,
      })
    },
    [showDialog, handleConfirmDelete, closeDialog],
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

  return (
    <>
      {content}
      <DeleteDialog />
    </>
  )
}

export default RecipesContainer
