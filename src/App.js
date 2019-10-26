import React, { useEffect, useState } from 'react';
import './App.css';
import Homepage from './container/Homepage';
//router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShopPage from './container/Shop/ShopPage';
import Header from './component/common/header/header';
import SignInSignUp from './container/SignIn-SignUp/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  let unSubscribeFromAuth = null;

  useEffect(() => {
    unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });

        console.log(currentUser);
      }
      // setCurrentUser(userAuth);
    });
  }, []);
  console.log(currentUser);
  return (
    <BrowserRouter>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
