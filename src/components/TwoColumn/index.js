import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Projects from 'containers/Projects';
import About from 'containers/About';
import Contact from 'containers/Contact';
import LeftColumnContent from 'components/LeftColumnContent';

const Row = styled.div`
  width: 100%;
  @media (min-width: 500px) {
    display: flex;
  }
`;

const Column = styled.div`
  @media (min-width: 500px) {
    flex: ${props => (props.flex ? props.flex : '50%')};
    position: relative;
    min-height: 100vh;
  }
`;

const TwoColumn = () => (
  <Router>
    <Row>
      <Column flex="30%">
        <LeftColumnContent />
      </Column>
      <Column flex="70%">
        <Route exact path="/" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Column>
    </Row>
  </Router>
);

export default TwoColumn;
