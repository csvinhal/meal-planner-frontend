import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const daysOfWeek = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
  },
  cols: {
    flex: "1",
    minWidth: "137px",
    textAlign: "center",
  },
  weekName: {
    padding: theme.spacing(1)
  },
}));

const Week = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {daysOfWeek.map((dayOfWeek) => (
        <div key={dayOfWeek} className={classes.cols}>
          <Typography
            className={classes.weekName}
            variant="body1"
            align="center"
          >
            {dayOfWeek}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Week;
