import notFound from "@assets/images/not_found.svg";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  notFound: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      maxWidth: 560,
      marginRight: "auto",
      marginLeft: "auto",
    },
  },
  image: {
    width: "100%",
    height: "auto",
  },
  title: {
    marginTop: theme.spacing(1),
    textAlign: "center",
  },
  button: {
    marginTop: theme.spacing(1),
  },
}));

const NotFound = () => {
  const history = useHistory();
  const classes = useStyles();

  const handleClick = useCallback(() => history.goBack(), [history]);

  return (
    <div className={classes.notFound}>
      <img
        className={classes.image}
        src={notFound}
        alt="Página não encontrada"
      />
      <Typography className={classes.title} variant="h6" component="h1">
        Ops! A página que está procurando não existe!
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Voltar
      </Button>
    </div>
  );
};

export default NotFound;
