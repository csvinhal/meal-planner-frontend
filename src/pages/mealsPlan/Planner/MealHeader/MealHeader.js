import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  name: {
    minWidth: "60px",
    width: "60px",
    position: "relative",
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: 0,
    textAlign: "centemealr",
    margin: "auto",
  },
  description: {
    textOrientation: "sideways-right",
    writingMode: "vertical-lr",
    textTransform: "uppercase",
    transform: "rotate(180deg)",
  },
}));

const MealHeader = ({ name }) => {
  const classes = useStyles();
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
  );
};

MealHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MealHeader;
