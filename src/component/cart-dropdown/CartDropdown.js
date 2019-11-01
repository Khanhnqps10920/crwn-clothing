import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss';

// redux
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem';

const CartDropdown = ({ cart: { cartItems } }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(CartDropdown);
