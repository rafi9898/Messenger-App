const initState: any = {
  authError: null
};

const authReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

interface IInitState {
  authError?: any;
}

export default authReducer;
