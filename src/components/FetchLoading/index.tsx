import { Backdrop, CircularProgress, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    color: '#fff',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    marginBottom: theme.spacing(2),
  },
}))

const FetchLoading = () => {
  const classes = useStyles()
  return (
    <Backdrop className={classes.backdrop} open>
      <div className={classes.content}>
        <CircularProgress className={classes.progress} color="inherit" />
        <Typography variant="h5" component="h5">
          Aguarde
        </Typography>
        <Typography variant="h6" component="h6">
          Estamos carregando as informações
        </Typography>
      </div>
    </Backdrop>
  )
}

export default FetchLoading
