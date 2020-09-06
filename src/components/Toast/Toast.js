import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../reducers/toast";

const Toast = () => {
  const toastSelector = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  const open = toastSelector.get("open");
  const message = toastSelector.get("message");
  const severity = toastSelector.get("severity");

  const handleToastClose = useCallback(
    (event, reason) => {
      if (reason === "clickaway") {
        return;
      }

      dispatch(actions.closeMessage());
    },
    [dispatch]
  );
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={5000}
      onClose={handleToastClose}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleToastClose}
        severity={severity}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
