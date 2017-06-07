import React, { Component } from 'react'
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SidebarComponent from './sidebarcomponent.jsx';
import AppComponent from './appcomponent.jsx';

/*var routes = (
    <BrowserRouter>
        <Route path='/' component={SidebarComponent}>
            <Route path='/home' component={AppComponent} />
        </Route>
    </BrowserRouter>
);*/


/*const routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={SidebarComponent}>
                <Route path='/home' component={AppComponent} />
            </Route>
        </Switch>
    </BrowserRouter>
);*/