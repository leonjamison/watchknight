import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App'
// import Homepage from './components/homepage';
import Signup from './components/Signup';
import Searchresults from './components/search';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={App}></Route>
      <Route exact path='/Signup' component={Signup}></Route>
      <Route exact path='/Search' component={Searchresults} />
    </Switch>
  );
}

export default Main;