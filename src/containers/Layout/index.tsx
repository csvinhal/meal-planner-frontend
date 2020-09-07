import AppToolbar from "@components/AppToolbar/AppToolbar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React, { FunctionComponent, ReactElement } from "react";

interface Props {
  children: ReactElement<any> | JSX.Element[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    marginTop: theme.spacing(2 * 4),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3),
      marginTop: theme.spacing(3 * 3),
    },
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Layout: FunctionComponent<Props> = ({ children }: Props) => {
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
