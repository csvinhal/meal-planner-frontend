import { DeleteDialogState, ShowDialogInput } from '@models/dialog'
import constate from 'constate'
import { useCallback, useState } from 'react'

const useDialogHook = () => {
  const [state, setState] = useState<DeleteDialogState>({
    open: false,
    title: '',
    message: '',
  })

  const showDialog = useCallback(
    async ({
      title = 'Deseja realmente deletar?',
      message = 'Uma vez que o item for deletado ele não poderá ser restaurado',
      handleConfirm,
      handleCancel,
    }: ShowDialogInput) => {
      setState({
        open: true,
        title,
        message,
        handleConfirm,
        handleCancel,
      })
    },
    [],
  )

  const closeDialog = useCallback(async () => {
    setState((currentState) => ({ ...currentState, open: false }))
  }, [])

  return {
    state,
    effects: {
      showDialog,
      closeDialog,
    },
  }
}

const [DialogProvider, useDeleteDialogState, useDeleteDialogEffects] = constate(
  useDialogHook,
  (value) => value.state,
  (value) => value.effects,
)

export { DialogProvider, useDeleteDialogState, useDeleteDialogEffects }
