import React from 'react';
import './CheckoutItem.scss';
import { connect } from 'react-redux';
import {
  removeItemFromCart,
  addItemToCart,
  removeOneItemFromCart
} from '../../redux/action/cart';

const CheckoutItem = ({
  cartItem,
  removeItemFromCart,
  removeOneItemFromCart,
  addItemToCart
}) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            removeOneItemFromCart(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          removeItemFromCart(cartItem);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapActionToProps = {
  removeItemFromCart,
  removeOneItemFromCart,
  addItemToCart
};

export default connect(null, mapActionToProps)(CheckoutItem);
