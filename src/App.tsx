import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import MainLayout from './views/layouts/MainLayout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/episodes" />} />
        <Route component={MainLayout} />
      </Switch>
    </Router>
  );
}

export default App;
