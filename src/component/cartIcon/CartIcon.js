import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/action/cart';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = {
  toggleCartHidden
};

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
