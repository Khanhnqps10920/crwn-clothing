import React, { useEffect, useState } from 'react';
import './App.css';
import Homepage from './container/Homepage';
//router
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './container/Shop/ShopPage';
import Header from './component/common/header/header';
import SignInSignUp from './container/SignIn-SignUp/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/action/user';
import Checkout from './component/checkout/Checkout';

function App({ setCurrentUser, user: { currentUser } }) {
  // const [currentUser, setCurrentUser] = useState(null);

  let unSubscribeFromAuth = null;

  useEffect(() => {
    unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }

      setCurrentUser(userAuth);
    });
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  setCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
