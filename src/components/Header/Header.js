import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Header = ({ title }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.header} variant="h4" component="h1">
      {title}
    </Typography>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
