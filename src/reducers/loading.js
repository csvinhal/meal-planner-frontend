export const types = {
  SHOW_LOADER: "[Loading] show loader",
  CLOSE_LOADER: "[Loading] close loader",
};

const initialState = {
  open: false,
};

const showLoader = (state) => ({
  ...state,
  open: true,
});

const closeLoader = (state) => ({
  ...state,
  open: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_LOADER:
      return showLoader(state);
    case types.CLOSE_LOADER:
      return closeLoader(state);
    default:
      return state;
  }
};

export const actions = {
  showLoader: () => ({ type: types.SHOW_LOADER }),
  closeLoader: () => ({ type: types.CLOSE_LOADER }),
};
