import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Layout from "../../hoc/Layout";
import Planner from "./Planner/Planner";
import Recipes from "./Recipes/Recipes";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    columnGap: theme.spacing(1),
  },
}));

const MealsPlan = () => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <Recipes />
        <Planner />
      </div>
    </Layout>
  );
};

export default MealsPlan;
