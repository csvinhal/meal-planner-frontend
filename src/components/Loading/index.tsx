import { Backdrop, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { FunctionComponent } from 'react'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

const Loading: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <Backdrop className={classes.backdrop} open>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default Loading
