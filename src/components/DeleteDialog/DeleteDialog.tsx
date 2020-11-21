import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'
import { useDeleteDialogState } from '@providers/DeleteDialog'
import React from 'react'

const DeleteDialog = () => {
  const {
    open,
    title,
    message,
    handleConfirm,
    handleCancel,
  } = useDeleteDialogState()
  const handleClose = (confirmed: boolean) => {
    if (confirmed && handleConfirm) {
      handleConfirm()
    } else if (handleCancel) {
      handleCancel()
    }
  }

  return (
    <Dialog
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(false)} color="primary">
          Cancelar
        </Button>
        <Button onClick={() => handleClose(true)} color="primary" autoFocus>
          Deletar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteDialog
