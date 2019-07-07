import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Projects from 'containers/Projects';
import About from 'containers/About';
import Contact from 'containers/Contact';

const Row = styled.div`
  display: flex;
  height: 100vh;
`;

const Column = styled.div`
  flex: 50%;
  padding: 10px;
  border: 1px solid;
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li``;

const StyledLink = styled(Link)``;

const TwoColumn = () => (
  <Router>
    <Row>
      <Column>
        <h1>Portfolio</h1>
        <h2>Subtitle</h2>
        <Ul>
          <Li>
            <StyledLink to="/">Projects</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/about">About</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/contact">Contact</StyledLink>
          </Li>
        </Ul>
      </Column>
      <Column>
        <Route exact path="/" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Column>
    </Row>
  </Router>
);

export default TwoColumn;
