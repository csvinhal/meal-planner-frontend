import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { RootReducer } from '@reducers/index'
import { actions } from '@reducers/toast'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Toast = () => {
  const { open, message, severity } = useSelector(
    (state: RootReducer) => state.toast,
  )
  const dispatch = useDispatch()

  const handleToastClose = useCallback(
    (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return
      }

      dispatch(actions.closeMessage())
    },
    [dispatch],
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
