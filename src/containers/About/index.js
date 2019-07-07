import React from 'react';
import styled from 'styled-components';
import { Typography } from '@smooth-ui/core-sc';

const Container = styled.div`
  padding: 20px;
`;

const About = () => (
  <Container>
    <Typography variant="h1">About</Typography>
  </Container>
);

export default About;
