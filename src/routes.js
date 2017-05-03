import React from 'react';
import {Router,Route,hashHistory,IndexRoute}  from 'react-router';
import App from './App.js';
import Home from './component/Home.js';
import Ability from './component/Ability.js';
import Job from './component/Job.js';
import Project from './component/Project.js';
import Modal from './component/Modal.js'




function Routers() {
  return(
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='ability' component={Ability}></Route>
        <Route path='job' component={Job} ></Route>
        <Route path='project' component={Project} ></Route>
        <Route path='modal' component={Modal}></Route>
      </Route>
    </Router>
  )
}

export default Routers;
