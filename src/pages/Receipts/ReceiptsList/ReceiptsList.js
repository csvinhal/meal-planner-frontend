import { makeStyles } from "@material-ui//styles";
import React, { useEffect, useState } from "react";
import { fetchAllReceipts } from "../../../shared/receiptApi";
import ReceiptCard from "./ReceiptCard/ReceiptCard";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ReceiptsList = () => {
  const [receipts, setReceipts] = useState([]);
  const [offset, setOffset] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    fetchAllReceipts(10, offset).then((response) => {
      const { data } = response;
      setReceipts((p) => [...p, ...data]);
    });
  }, [offset]);

  return (
    <div>
      {receipts.map((receipt) => (
        <ReceiptCard key={receipt.id} receipt={receipt} />
      ))}
    </div>
  );
};

export default ReceiptsList;
