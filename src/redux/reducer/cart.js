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
    case actionType.REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems].filter(
          cartItem => cartItem.id !== payload.id
        )
      };
    }
    case actionType.REMOVE_ONE_ITEM_FROM_CART: {
      let cartItems = [...state.cartItems];
      const cartItemRemove = cartItems.find(
        cartItem => cartItem.id === payload.id
      );

      console.log(cartItemRemove);

      if (cartItemRemove.quantity === 1) {
        cartItems = cartItems.filter(
          cartItem => cartItem.id !== cartItemRemove.id
        );
      } else {
        cartItems = cartItems.map(cartItem =>
          cartItem.id === cartItemRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }

      return {
        ...state,
        cartItems
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
