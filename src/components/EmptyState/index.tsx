import { Button, Fab, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

interface Props {
  title: string;
  text: string;
  image: string;
  primaryActionLabel: string;
  handlePrimaryAction: (...args: any[]) => any;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginTop: theme.spacing(3),
  },
  text: {
    marginTop: theme.spacing(1),
    textAlign: "center",
  },
  image: {
    height: "auto",
    width: 200,
  },
  fabButton: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  button: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      marginTop: theme.spacing(2),
    },
  },
}));

const EmptyState = ({
  title,
  text,
  image,
  primaryActionLabel,
  handlePrimaryAction,
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <img className={classes.image} src={image} alt="Não encontrado" />
      <Typography className={classes.title} variant="h4" component="h1">
        {title}
      </Typography>
      <Typography className={classes.text} variant="body1">
        {text}
      </Typography>

      <Button
        className={classes.button}
        type="submit"
        variant="contained"
        color="primary"
        onClick={handlePrimaryAction}
      >
        {primaryActionLabel}
      </Button>

      <Fab
        className={classes.fabButton}
        color="primary"
        aria-label="add"
        onClick={handlePrimaryAction}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default EmptyState;
