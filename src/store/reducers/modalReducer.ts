const initState = {
  modalStatus: false
};

const modalReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "CREATE_MODAL":
      return {
        modalStatus: action.modalStatus
      };
  }
  return state;
};

export default modalReducer;
