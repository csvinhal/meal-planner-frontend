import { Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) =>
  createStyles({
    name: {
      minWidth: '60px',
      width: '60px',
      position: 'relative',
      paddingTop: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: 0,
      textAlign: 'center',
      margin: 'auto',
    },
    description: {
      // textOrientation: 'sideways-right',
      writingMode: 'vertical-lr',
      textTransform: 'uppercase',
      transform: 'rotate(180deg)',
    },
  }),
)

interface Props {
  name: string
}

const MealHeader = ({ name }: Props) => {
  const classes = useStyles()
  return (
    <div className={classes.name}>
      <Typography
        className={classes.description}
        variant="body2"
        align="center"
      >
        {name}
      </Typography>
    </div>
  )
}

export default MealHeader
