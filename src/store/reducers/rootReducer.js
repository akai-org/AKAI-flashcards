const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
    case 'AUTHENTICATE_USER': {
      const userData = action.payload;
      console.log(action.payload);

      const userDataToSetInState = {
        email: userData.email,
        emailVerified: userData.emailVerified,
        uid: userData.uid,
      };

      return { userData: userDataToSetInState, ...state };
    }
    case 'SIGN_OUT': {
      return { initialState };
    }

    // case 'AUTHENTICATE_USER': {
    //   console.log(action);
    //   return state;
    // }

    default: {
      return state;
    }
  }
};

export default rootReducer;
