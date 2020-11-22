import DeleteDialog from '@components/DeleteDialog/DeleteDialog'
import Layout from '@components/Layout/Layout'
import { useDeleteDialogEffects } from '@providers/DeleteDialog'
import { useRecipesEffects, useRecipesState } from '@providers/Recipes'
import { useToastEffects } from '@providers/Toast'
import React, { useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import RecipeEmptyState from '../components/RecipeEmptyState/RecipeEmptyState'
import RecipeList from '../components/RecipeList/RecipeList'
import RecipeListLoader from '../components/RecipeListLoader/RecipeListLoader'

const RecipesContainer = () => {
  const { loading, recipes } = useRecipesState()
  const { fetchRecipes, deleteAndRefetch } = useRecipesEffects()
  const history = useHistory()
  const { showDialog, closeDialog } = useDeleteDialogEffects()
  const { showToast } = useToastEffects()

  const handlerAdd = useCallback(() => {
    history.push('/recipes/add')
  }, [history])

  const handleConfirmDelete = useCallback(
    async (id) => {
      await deleteAndRefetch(id)
      showToast({
        severity: 'success',
        message: 'Receita deletada com sucesso!',
      })
      closeDialog()
    },
    [deleteAndRefetch, closeDialog, showToast],
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
    <Layout>
      {content}
      <DeleteDialog />
    </Layout>
  )
}

export default RecipesContainer
