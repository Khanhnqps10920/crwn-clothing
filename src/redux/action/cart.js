import actionType from './actionType';

export const toggleCartHidden = () => ({
  type: actionType.TOGGLE_CART_HIDDEN
});

export const addItemToCart = item => ({
  type: actionType.ADD_ITEM,
  payload: item
});
