import React from 'react';
//auth
import { auth } from '../../../firebase/firebase.utils';
// react router dom
import { Link } from 'react-router-dom';
//style
import './header.scss';
//svg
import { ReactComponent as Logo } from '../../../assets/crown.svg';

const header = ({ currentUser }) => {
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
              window.location.reload();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default header;
