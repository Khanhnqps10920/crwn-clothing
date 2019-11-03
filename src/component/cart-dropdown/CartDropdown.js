import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss';
import { withRouter } from 'react-router-dom';
// redux
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem';
import { toggleCartHidden } from '../../redux/action/cart';
//reselect
import { selectCartItems } from '../../redux/reducer/cart.selector';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});
const mapActionToProps = {
  toggleCartHidden
};

export default withRouter(
  connect(
    mapStateToProps,
    mapActionToProps
  )(CartDropdown)
);
