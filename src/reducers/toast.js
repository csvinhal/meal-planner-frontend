export const types = {
  SHOW_MESSAGE: "[Toast] show message",
  CLOSE_MESSAGE: "[Toast] close message",
};

const initialState = {
  message: "",
  severity: "success",
  open: false,
};

const showMessage = (state, action) => ({
  ...state,
  open: true,
  severity: action.severity,
  message: action.message,
});

const closeMessage = (state) => ({
  ...state,
  open: false,
  severity: "success",
  message: "",
});

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
