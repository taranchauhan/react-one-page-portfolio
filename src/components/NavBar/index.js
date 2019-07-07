import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li``;

const StyledLink = styled(Link)``;

const NavBar = () => (
  <React.Fragment>
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

    <Ul>
      <Li>
        <StyledLink to="/">Project 1</StyledLink>
      </Li>
      <Li>
        <StyledLink to="/">Project 2</StyledLink>
      </Li>
      <Li>
        <StyledLink to="/">Project 3</StyledLink>
      </Li>
      <Li>
        <StyledLink to="/">Project 4</StyledLink>
      </Li>
      <Li>
        <StyledLink to="/">Project 5</StyledLink>
      </Li>
      <Li>
        <StyledLink to="/">Project 6</StyledLink>
      </Li>
      <Li>
        <StyledLink to="/">Project 7</StyledLink>
      </Li>
      <Li>
        <StyledLink to="/">Project 8</StyledLink>
      </Li>
      <Li>
        <StyledLink to="/">Project 9</StyledLink>
      </Li>
    </Ul>
  </React.Fragment>
);

export default NavBar;
