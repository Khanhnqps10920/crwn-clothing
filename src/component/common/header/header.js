import React from 'react';
//auth
import { auth } from '../../../firebase/firebase.utils';
// react router dom
import { Link } from 'react-router-dom';
//style
import './header.scss';
//svg
import { ReactComponent as Logo } from '../../../assets/crown.svg';
// redux
import { connect } from 'react-redux';
//components
import CartIcon from '../../cartIcon/CartIcon';
import CartDropdown from '../../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../../redux/reducer/cart.selector';
import { selectCurrentUser } from '../../../redux/reducer/user.selector';

const header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
              console.log('aaaa');
              // window.location.reload();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = state => ({
  hidden: selectCartHidden(state),
  currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(header);
