const initState = {
  messages: []
};

const messageReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "CREATE_MESSAGE":
      console.log("created_message", action.message);
      return state;

    case "CREATE_MESSAGE_ERROR":
      console.log("create message error", action.err);
      return state;

    default:
      return state;
  }
};

export default messageReducer;
