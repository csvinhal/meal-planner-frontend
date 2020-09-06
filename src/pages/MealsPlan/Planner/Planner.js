import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";
import Meal from "./Meal/Meal";
import MealHeader from "./MealHeader/MealHeader";
import Week from "./Week/Week";

const meals = [
  "Breakfast",
  "Snack",
  "Lunch",
  "Afternoon Snack",
  "Dinner",
  "Supper",
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  rowWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  name: {
    minWidth: "60px",
    width: "60px",
    position: "relative",
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: 0,
    textAlign: "center",
    margin: "auto",
  },
  row: {
    display: "flex",
    width: "100%",
  },
  rowMeal: {
    height: "152px",
    borderTop: "1px solid",
  },
  description: {
    textOrientation: "sideways-right",
    writingMode: "vertical-lr",
    textTransform: "uppercase",
    transform: "rotate(180deg)",
  },
}));

const Planner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.rowWrapper}>
        <div className={classes.name} aria-hidden={true}></div>
        <Week />
      </div>

      {meals.map((meal) => (
        <div key={meal} className={clsx(classes.rowWrapper, classes.rowMeal)}>
          <MealHeader name={meal} />
          <Meal />
        </div>
      ))}
    </div>
  );
};

export default Planner;
