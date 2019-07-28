const initState = {
  modalStatus: false
};

const AddRoomInitState = {
  addRoomModalStatus: false
};

const ShowSearchBoxInitState = {
  showSearchBoxStatus: true
};

export const modalReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "CREATE_MODAL":
      return {
        modalStatus: action.modalStatus
      };
  }
  return state;
};

export const createAddRoomModalReducer = (
  state = AddRoomInitState,
  action: any
) => {
  switch (action.type) {
    case "CREATE_ADD_NEW_ROOM_MODAL":
      return {
        addRoomModalStatus: action.addRoomModalStatus
      };
  }
  return state;
};

export const createShowSearchBox = (
  state = ShowSearchBoxInitState,
  action: any
) => {
  switch (action.type) {
    case "SHOW_SEARCH_BOX":
      return {
        showSearchBoxStatus: action.showSearchBoxStatus
      };
  }
  return state;
};
