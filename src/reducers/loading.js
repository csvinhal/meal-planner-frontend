import { fromJS } from "immutable";

export const types = {
  SHOW_LOADER: "[Loading] show loader",
  CLOSE_LOADER: "[Loading] close loader",
};

const initialState = fromJS({
  open: false,
});

const showLoader = (state) => {
  return state.set("open", true);
};

const closeLoader = (state) => {
  return state.set("open", false);
};

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
