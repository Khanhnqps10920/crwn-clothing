import React from 'react';
import './App.css';
import Homepage from './container/Homepage';
//router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShopPage from './container/Shop/ShopPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
