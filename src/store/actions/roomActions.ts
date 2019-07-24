export const createRoom = (room: any) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    //make async call to datanase
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log(getState().firebase);
    firestore
      .collection("rooms")
      .add({
        ...room,
        createdBy: profile.firstName + " " + profile.lastName,
        authorId: authorId,
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
