import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'
//import { HashRouter } from 'react-router-dom'
import SidebarComponent from './sidebarcomponent.jsx';
import AppComponent from './appcomponent.jsx';

var routes = (
    <Router>
        <Route path='/' component={SidebarComponent}>
            <Route path='/home' component={AppComponent} />
        </Route>
    </Router>
);

module.exports = routes;