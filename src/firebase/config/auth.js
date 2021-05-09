import firebase from 'firebase/app';

export const registerUser = ({ email, password, confirm }) => {
  let response;

  if (password === confirm) {
    response = firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        return user;
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        // ..
        throw errorMessage;
      });
  }
  return response;
};

export const signInUser = ({ email, password }) => {
  //   const dispatch = useDispatch();
  const userData = firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;

      return user;

      //   dispatch({ type: 'AUTHENTICATE_USER', payload: user });
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      throw errorMessage;
    });

  return userData;
};

export const signOut = () => {
  const response = firebase
    .auth()
    .signOut()
    .then(() => true)
    .catch((error) => {
      throw error.errorMessage;
    });

  return response;
};
