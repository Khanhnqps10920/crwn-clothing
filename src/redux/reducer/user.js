import actionType from '../action/actionType';

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.SET_CURRENT_USER: {
      return { ...state, currentUser: payload };
    }

    default:
      return state;
  }
};

export default userReducer;
