import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App'
// import Homepage from './components/homepage';
import Login from './components/Login';
import Searchresults from './components/search';
import DbMovieDetails from './components/DbMovieDetails';



const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={App}></Route>
      <Route exact path='/Login' component={Login}></Route>
      <Route exact path='/Search' component={Searchresults} />
      <Route exact path='/Movie' component={DbMovieDetails} />
     
    </Switch>
  );
}

export default Main;