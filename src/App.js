import React from 'react';
import './App.css';
import Homepage from './container/Homepage';
//router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const HatsPage = () => <div>hatspage</div>;

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
