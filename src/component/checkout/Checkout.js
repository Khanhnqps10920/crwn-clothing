import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/reducer/cart.selector';
import { selectCartTotal } from '../../redux/reducer/cart.selector';
import CheckoutItem from '../checkout-item/CheckoutItem';
import StripeCheckOutButton from '../stripe-button/StripeButton';

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: $ {total}</span>
      </div>
      <div className="test-warning">
        *Please use the following credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV:123
      </div>
      <StripeCheckOutButton price={total} />
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state)
});

export default connect(mapStateToProps)(Checkout);
