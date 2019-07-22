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
    default:
      return state;
  }
};

interface IInitState {
  authError?: any;
}

export default authReducer;
