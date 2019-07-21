const initState = {
  rooms: [
    { id: "1", roomName: "asdasda1", roomColor: "#FFF" },
    { id: "2", roomName: "asdasda2", roomColor: "#FFF" },
    { id: "3", roomName: "asdasda3", roomColor: "#FFF" }
  ]
};

const roomReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "CREATE_ROOM":
      console.log("created_room", action.room);
      return state;

    case "CREATE_ROOM_ERROR":
      console.log("create room error", action.err);
      return state;

    default:
      return state;
  }
};

export default roomReducer;
