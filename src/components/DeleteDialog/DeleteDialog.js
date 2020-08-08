import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../reducers/dialog";

const DeleteDialog = () => {
  const dispatch = useDispatch();
  const {
    open,
    title,
    message,
    handleConfirm,
  } = useSelector((state) => state.dialog.toJS());

  const handleClose = (confirmed) => {
      handleConfirm(confirmed);
    dispatch(actions.closeDialog());
  };

  return (
    <Dialog
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(false)} color="primary">
          Cancelar
        </Button>
        <Button
          onClick={() => handleClose(true)}
          color="primary"
          autoFocus
        >
          Deletar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteDialog.propTypes = {};

export default DeleteDialog;
