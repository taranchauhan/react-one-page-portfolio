import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PortfolioOwner = styled.h1`
  font-weight: 800;
  font-size: 2em;
  margin-bottom: 2px;
`;

const Heading = ({ children }) => <PortfolioOwner>{children}</PortfolioOwner>;

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading;
