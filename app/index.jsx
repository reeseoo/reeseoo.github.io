import React, { Component } from 'react'
import {render} from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SidebarComponent from './sidebarcomponent.jsx';
import AppComponent from './appcomponent.jsx';
//var routes = require('./routes');

render(<BrowserRouter>
      <Switch>
        <Route exact path="/" component={AppComponent} />
        <Route exact path="/home" component={AppComponent} />
      </Switch>
    </BrowserRouter>, document.getElementById('app'));