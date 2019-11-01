import actionType from '../action/actionType';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case actionType.ADD_ITEM: {
      const cartItems = [...state.cartItems];
      const itemIdx = cartItems.findIndex(item => item.id === payload.id);
      if (itemIdx !== -1) {
        cartItems[itemIdx] = {
          ...cartItems[itemIdx],
          quantity: cartItems[itemIdx].quantity + 1
        };
      } else {
        const item = { ...payload, quantity: 1 };
        cartItems.push(item);
      }

      return { ...state, cartItems };
    }
    default:
      return state;
  }
};

export default cartReducer;
