import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchAllReceipts } from "../../../shared/receiptApi";
import ReceiptCard from "./ReceiptCard/ReceiptCard";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
const ReceiptsList = () => {
  const [receipts, setReceipts] = useState([]);
  const [offset, setOffset] = useState(0);
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    fetchAllReceipts(10, offset).then((response) => {
      const { data } = response;
      setReceipts((p) => [...p, ...data]);
    });
  }, [offset]);

  const handlerAdd = () => {
    history.push("/receipts/add")
  };

  return (
    <Paper elevation={2} className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handlerAdd}>
            Adicionar
          </Button>
        </Grid>
        <Grid item xs={12}>
          {receipts.map((receipt) => (
            <ReceiptCard key={receipt.id} receipt={receipt} />
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReceiptsList;
