import { fromJS } from "immutable";

export const types = {
  SHOW_MESSAGE: "[Toast] show message",
  CLOSE_MESSAGE: "[Toast] close message",
};

const initialState = fromJS({
  message: "",
  severity: "success",
  open: false,
});

const showMessage = (state, action) => {
  return state
    .set("open", true)
    .set("severity", action.severity)
    .set("message", action.message);
};

const closeMessage = (state) => {
  return state.set("open", false).set("severity", "").set("message", "");
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MESSAGE:
      return showMessage(state, action);
    case types.CLOSE_MESSAGE:
      return closeMessage(state, action);
    default:
      return state;
  }
};

export const actions = {
  showMessage: ({ severity, message }) => ({
    type: types.SHOW_MESSAGE,
    severity,
    message,
  }),
  closeMessage: () => ({ type: types.CLOSE_MESSAGE }),
};
