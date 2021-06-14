import React from 'react';
// @ts-ignore
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Todos from './pages/todos/todos';

export default () => (
  <Router>
    <Switch>
      <Route path="/todos" component={Todos} exact />
    </Switch>
  </Router>
);
