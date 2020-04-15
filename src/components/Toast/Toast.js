import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import PropTypes from "prop-types";
import React from "react";

const Toast = ({ open, message, severity, handleClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={severity}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

Toast.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  severity: PropTypes.oneOf(["error", "warning", "info", "success"])
    .isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Toast;
