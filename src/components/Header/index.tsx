import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

interface Props {
  title: string
}

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

const Header = ({ title }: Props) => {
  const classes = useStyles()
  return (
    <Typography className={classes.header} variant="h4" component="h1">
      {title}
    </Typography>
  )
}

export default Header
