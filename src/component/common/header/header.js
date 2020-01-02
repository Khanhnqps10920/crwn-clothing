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

// styled cpn

import {
  OptionsContainer,
  LogoContainer,
  HeaderContainer,
  OptionsDiv,
  OptionsLink
} from './Header.styles';

const header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionsLink to="/shop">Shop</OptionsLink>
        <OptionsLink to="/shop">Contact</OptionsLink>
        {currentUser ? (
          <OptionsDiv
            // as="div" => div element
            onClick={() => {
              auth.signOut();
              console.log('aaaa');
              // window.location.reload();
            }}
          >
            SIGN OUT
          </OptionsDiv>
        ) : (
          <OptionsLink to="/signin">SIGN IN</OptionsLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = state => ({
  hidden: selectCartHidden(state),
  currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(header);
