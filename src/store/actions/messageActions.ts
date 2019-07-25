export const createMessage = (message: any) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    //make async call to datanase
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log(message);
    firestore
      .collection("messages")
      .doc(message.roomId)
      .collection("messageList")
      .add({
        ...message,
        createdBy: profile.firstName + " " + profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_MESSAGE", message });
      })
      .catch((err: any) => {
        dispatch({ type: "CREATE_MESSAGE_ERROR", err });
      });
  };
};
