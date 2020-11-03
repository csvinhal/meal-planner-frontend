import { Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { MealType } from '@models/meals'
import React, { memo, useMemo } from 'react'

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
  mealType: number
}

const MealHeader = ({ mealType }: Props) => {
  const classes = useStyles()
  const name = useMemo(() => {
    switch (mealType) {
      case MealType.BREAKFAST:
        return 'BREAKFAST'
      case MealType.SNACK:
        return 'SNACK'
      case MealType.LUNCH:
        return 'LUNCH'
      case MealType.AFTERNOON_SNACK:
        return 'AFTERNOON SNACK'
      case MealType.DINNER:
        return 'DINNER'
      case MealType.SUPPER:
        return 'SUPPER'
      default:
        return ''
    }
  }, [mealType])

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

export default memo(MealHeader)
