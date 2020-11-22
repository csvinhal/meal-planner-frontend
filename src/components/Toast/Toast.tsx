import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { useToastEffects, useToastState } from '@providers/Toast'
import React, { useCallback } from 'react'

const Toast = () => {
  const { open, message, severity } = useToastState()
  const { closeToast } = useToastEffects()

  const handleToastClose = useCallback(
    (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return
      }

      closeToast()
    },
    [closeToast],
  )
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={5000}
      onClose={handleToastClose}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleToastClose}
        severity={severity}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Toast
