export const signIn = (credentials: any) => {
  return (dispatch: any, getState: any, { getFirebase }: any) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err: any) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch: any, getState: any, { getFirebase }: any) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = (newUser: any) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp: any) => {
        if (newUser.profileImage.length > 0) {
          return firebase
            .storage()
            .ref()
            .child(`avatars/${resp.user.uid}`)
            .put(newUser.profileImage[0])
            .then((snapshot: any) => {
              snapshot.ref.getDownloadURL().then((url: any) => {
                firestore
                  .collection("users")
                  .doc(resp.user.uid)
                  .set({
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    initials: newUser.firstName[0] + newUser.lastName[0],
                    picture: url
                  });
              });
            });
        } else {
          return firestore
            .collection("users")
            .doc(resp.user.uid)
            .set({
              firstName: newUser.firstName,
              lastName: newUser.lastName,
              initials: newUser.firstName[0] + newUser.lastName[0],
              picture: null
            });
        }
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err: any) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
