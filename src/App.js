import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Project } from 'containers';
import ScrollToTop from 'utils/helpers/ScrollToTop';

const App = () => (
  <Router>
    <ScrollToTop>
      <Route exact path="/" component={Home} />
      <Route path="/project/:name" component={Project} />
    </ScrollToTop>
  </Router>
);

export default App;
