import React, { useState } from "react";
import { Snackbar } from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/core/Alert";

const Toast = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        This is a success message!
      </Alert>
    </Snackbar>
  );
};

export default Toast;
