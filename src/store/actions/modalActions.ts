export const createModal = (state: boolean) => {
  return (dispatch: any, getState: any) => {
    dispatch({ type: "CREATE_MODAL", modalStatus: state });
  };
};

export const createAddNewRoomModal = (state: boolean) => {
  return (dispatch: any, getState: any) => {
    dispatch({ type: "CREATE_ADD_NEW_ROOM_MODAL", addRoomModalStatus: state });
  };
};
