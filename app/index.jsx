import React, { Component } from 'react'
import {render} from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import SidebarComponent from './sidebarcomponent.jsx';
import AppComponent from './appcomponent.jsx';
//var routes = require('./routes');

render(    <BrowserRouter>
            <Route path='/' component={SidebarComponent}>
                <Route path='/home' component={AppComponent} />
            </Route>
    </BrowserRouter>, document.getElementById('app'));