import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/action/cart';
// selector
import { selectCartItemsCount } from '../../redux/reducer/cart.selector';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = {
  toggleCartHidden
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
