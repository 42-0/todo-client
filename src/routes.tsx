import React from 'react';
// @ts-ignore
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home/home';
import Todo from './pages/todo/todo';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';

export default () => (
  <Router>
    <Switch>
      {/* <Route path={['/']} component={Home} exact /> */}
      {/* <Route path="/todo" component={Todo} /> */}
      <Route path="/" component={Todo} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </Router>
);
