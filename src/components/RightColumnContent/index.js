import React from 'react';
import styled from 'styled-components';
import { Typography } from '@smooth-ui/core-sc';
import PropTypes from 'prop-types';

const Container = styled.div`
  padding: 40px 40px 135px;
  background-color: #f5f7fa;
  height: 100%;
`;

const RightColumnContent = ({ children }) => (
  <Container>
    <Typography variant="h1">Projects</Typography>
    <React.Fragment>{children}</React.Fragment>
  </Container>
);

RightColumnContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RightColumnContent;
