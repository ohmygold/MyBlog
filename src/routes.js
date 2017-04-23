import React from 'react';
import {Router,Route,hashHistory,IndexRoute}  from 'react-router';
import App from './App.js';
import Home from './component/Home.js'




function Routers() {
  return(
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  )
}

export default Routers;
