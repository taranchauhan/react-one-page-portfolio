import React from 'react';
import { Typography } from '@smooth-ui/core-sc';
import NavBar from 'components/NavBar';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px 40px 135px;
`;

const LeftColumnContent = () => (
  <Container>
    <Typography variant="h1">Portfolio</Typography>
    <Typography color="#6C7A89" variant="h5">
      Subtitle
    </Typography>
    <NavBar />
    <Typography variant="h6">© 2019 Portfolio</Typography>
  </Container>
);

export default LeftColumnContent;
