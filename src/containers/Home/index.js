import React from 'react';
import { Typography } from '@smooth-ui/core-sc';
import BaseContainer from 'components/BaseContainer';
import { Link } from 'react-router-dom';

const Project = () => (
  <BaseContainer
    variant="h1"
    title="Forename Surname"
    subtitle="Full Stack Developer"
  >
    <Typography variant="p">This is the home page</Typography>
    <Typography variant="h6">
      <Link to="/project/app">Learn more...</Link>
    </Typography>
  </BaseContainer>
);

export default Project;
