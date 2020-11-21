import React from 'react'
import { Typography } from '@material-ui/core'

interface Props {
  title: string
}

const Header = ({ title }: Props) => {
  return (
    <Typography variant="h4" component="h1" gutterBottom>
      {title}
    </Typography>
  )
}

export default Header
