import { Divider } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from "@material-ui/icons/HomeOutlined";
import ReceiptIcon from "@material-ui/icons/ReceiptOutlined";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ListItems = ({ handleDrawerClose, handleSignOut }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    handleDrawerClose();
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="menus">
        <ListItem
          button
          component={Link}
          to="/"
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Principal" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/recipes"
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <ReceiptIcon />
          </ListItemIcon>
          <ListItemText primary="Receitas" />
        </ListItem>

        <Divider />

        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={handleSignOut}
        >
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </List>
    </div>
  );
};

ListItems.propTypes = {
  handleDrawerClose: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
};

export default ListItems;
