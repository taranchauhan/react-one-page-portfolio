import React from 'react';
import styled from 'styled-components';
import { Typography } from '@smooth-ui/core-sc';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  width: 100%;
`;

const BaseContainer = ({ title, subtitle, children }) => (
  <StyledContainer>
    <Typography variant="h1">{title}</Typography>
    <Typography variant="h2">{subtitle}</Typography>
    <React.Fragment>{children}</React.Fragment>
    <span>© {new Date().getFullYear()} Portfolio</span>
  </StyledContainer>
);

BaseContainer.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BaseContainer;
