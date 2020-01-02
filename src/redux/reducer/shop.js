import actionType from '../action/actionType';

const INITIAL_STATE = {
  shopData: {}
};

const shop = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch (type) {
    case actionType.UPDATE_COLLECTION:
      return { ...state, shopData: payload };

    default:
      return state;
  }
};

export default shop;
