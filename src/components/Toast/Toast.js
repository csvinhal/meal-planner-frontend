import { Query } from "@apollo/react-components";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import { toastMutations } from "../../apollo/operations/mutations/toast";
import { GET_TOAST } from "../../apollo/operations/queries";

const handleToastClose = (event, reason) => {
  const { closeToast } = toastMutations;
  if (reason === "clickaway") {
    return;
  }

  closeToast();
};

const Toast = () => {
  return (
    <Query query={GET_TOAST}>
      {({ data }) => (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={data.toast.open}
          autoHideDuration={5000}
          onClose={handleToastClose}
        >
          <Alert
            elevation={6}
            variant="filled"
            onClose={handleToastClose}
            severity={data.toast.severity}
          >
            {data.toast.message}
          </Alert>
        </Snackbar>
      )}
    </Query>
  );
};

Toast.propTypes = {};

export default Toast;
