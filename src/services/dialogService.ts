import store from '../reducers'
import { actions } from '../reducers/dialog'

const openDialog = (
  title = 'Deseja realmente deletar?',
  message = 'Uma vez que o item for deletado ele não poderá ser restaurado',
) => {
  return new Promise((resolve) => {
    const handleConfirm = resolve

    store.dispatch(actions.showDialog({ title, message, handleConfirm }))
  })
}

export default openDialog
