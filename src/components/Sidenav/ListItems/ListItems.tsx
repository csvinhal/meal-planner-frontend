import { Link, useLocation } from 'react-router-dom'
import React, { useCallback } from 'react'

import { Divider } from '@material-ui/core'
import EventIcon from '@material-ui/icons/Event'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import HomeIcon from '@material-ui/icons/HomeOutlined'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

interface Props {
  handleDrawerClose: () => void
  handleSignOut: () => void
}

const ListItems = ({ handleDrawerClose, handleSignOut }: Props) => {
  const location = useLocation()

  const isSelected = useCallback(
    (path: string) => {
      return location.pathname === path
    },
    [location],
  )

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="menus">
        <ListItem
          button
          component={Link}
          to="/"
          selected={isSelected('/')}
          onClick={handleDrawerClose}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Principal" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/meals-plan"
          selected={isSelected('/meals-plan')}
          onClick={handleDrawerClose}
        >
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Planejador" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/recipes"
          selected={isSelected('/recipes')}
          onClick={handleDrawerClose}
        >
          <ListItemIcon>
            <ReceiptIcon />
          </ListItemIcon>
          <ListItemText primary="Receitas" />
        </ListItem>

        <Divider />

        <ListItem button onClick={handleSignOut}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </List>
    </div>
  )
}

export default ListItems
