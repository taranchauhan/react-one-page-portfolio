import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PortfolioOwner = styled.h1`
  font-weight: 800;
  font-size: 2em;
  margin-bottom: 2px;
  display: inline;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: black;

  &:visited,
  &:active {
    color: black;
  }
  &:hover {
    text-decoration: underline;
    text-decoration-skip-ink: none;
  }
`;

const Heading = ({ url, children }) =>
  url ? (
    <StyledAnchor target="_blank" href={url}>
      <PortfolioOwner>{children}</PortfolioOwner>
    </StyledAnchor>
  ) : (
    <PortfolioOwner>{children}</PortfolioOwner>
  );

Heading.propTypes = {
  url: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Heading.defaultProps = {
  url: undefined,
};

export default Heading;
