import { Backdrop, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { RootReducer } from '@reducers/index'
import React from 'react'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

const FetchLoading = () => {
  const classes = useStyles()
  const { open } = useSelector((state: RootReducer) => state.loader)
  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default FetchLoading
