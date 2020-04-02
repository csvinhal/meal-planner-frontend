export const initialState = {
  isAuthenticated: false,
  user: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "signed_in":
      return {
        ...state,
        user: action.user,
        isAuthenticated: true
      };
    case "signed_out":
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };
    case "session_authenticated":
      return {
        ...state,
        user: action.user,
        isAuthenticated: true
      };
    default:
      return state;
  }
};
