import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import AppToolbar from "../components/AppToolbar/AppToolbar";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(3 * 3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  container: {
    marginTop: theme.spacing(2)
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header>
        <AppToolbar />
      </header>
      <main className={classes.content}>
        <Container className={classes.container}>{children}</Container>
      </main>
    </div>
  );
};

export default Layout;
