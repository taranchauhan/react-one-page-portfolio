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
    padding: 40px 40px 135px;
  }
`;

const TwoColumn = () => (
  <Row>
    <Column flex="30%">
      <LeftColumnContent />
    </Column>
    <Column flex="70%">
      <Router>
        <Route exact path="/" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </Column>
  </Row>
);

export default TwoColumn;
