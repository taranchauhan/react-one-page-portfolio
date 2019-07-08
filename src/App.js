import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Project } from 'containers';

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/project/:name" component={Project} />
  </Router>
);

export default App;
