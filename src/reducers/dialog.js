import { fromJS } from "immutable";

export const types = {
  SHOW_DIALOG: "[Dialog] open dialog",
  CLOSE_DIALOG: "[Dialog] close dialog",
};

const initialState = fromJS({
  open: false,
  title: "",
  message: "",
  handleConfirm: null,
});

const showDialog = (state, action) => {
  return state
    .set("open", true)
    .set("title", action.payload.title)
    .set("message", action.payload.message)
    .set("handleConfirm", action.payload.handleConfirm);
};

const closeDialog = (state) => {
  return state.set("open", false);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_DIALOG:
      return showDialog(state, action);
    case types.CLOSE_DIALOG:
      return closeDialog(state);
    default:
      return state;
  }
};

export const actions = {
  showDialog: (payload) => ({ type: types.SHOW_DIALOG, payload }),
  closeDialog: () => ({ type: types.CLOSE_DIALOG }),
};
