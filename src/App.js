import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Home, Project, Page404 } from 'containers';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/project/:name" component={Project} />
      <Route path="/404" component={Page404} />
      <Redirect to="/404" />
    </Switch>
  </Router>
);

export default App;
