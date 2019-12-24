import actionType from './actionType';

export const toggleCartHidden = () => ({
  type: actionType.TOGGLE_CART_HIDDEN
});

export const addItemToCart = item => ({
  type: actionType.ADD_ITEM,
  payload: item
});

export const removeItemFromCart = item => ({
  type: actionType.REMOVE_ITEM_FROM_CART,
  payload: item
});

export const removeOneItemFromCart = item => {
  console.log('test');
  return { type: actionType.REMOVE_ONE_ITEM_FROM_CART, payload: item };
};
