const initialState = {
  users: [{ firstName: 'Damian', lastName: 'Kalka' }],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      console.log(action);
      return state;
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
