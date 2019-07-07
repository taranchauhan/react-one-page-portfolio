import React from 'react';
import styled from 'styled-components';
import { Typography } from '@smooth-ui/core-sc';

const Container = styled.div`
  padding: 40px 40px 135px;
  background-color: #f5f7fa;
  height: 100%;
`;

const Projects = () => (
  <Container>
    <Typography variant="h1">Projects</Typography>
  </Container>
);

export default Projects;
