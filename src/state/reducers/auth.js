const initialState = {
  authenticating: false,
  authenticated: false,
  tokenConfig: {
    token: null,
    expires: null
  }
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "AUTHENTICATING":
      return {};
    case "SET_TOKEN_CONFIG":
      return {
        ...state,
        authenticated: true,
        tokenConfig: { ...action.config }
      };
    default:
      return state;
  }
}
