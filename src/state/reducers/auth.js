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
    default:
      return state;
  }
}
