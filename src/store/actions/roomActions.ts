export const createRoom = (room: any) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    //make async call to datanase
    const firestore = getFirestore();
    firestore
      .collection("rooms")
      .add({
        ...room,
        createdBy: "Rafi9898",
        authorId: "12345",
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_ROOM", room });
      })
      .catch((err: any) => {
        dispatch({ type: "CREATE_ROOM_ERROR", err });
      });
  };
};
