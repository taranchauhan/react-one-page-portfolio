import React from 'react';
import { Typography } from '@smooth-ui/core-sc';
import BaseContainer from 'components/fixtures/BaseContainer';
import { Link } from 'react-router-dom';

const Project = () => (
  <BaseContainer
    title="Navraj Singh"
    subtitle="Full Stack Developer"
    subtitleValue="Rexdale, Canada"
  >
    <Typography variant="h6">
      <Link to="/project/app">Learn more...</Link>
    </Typography>
  </BaseContainer>
);

export default Project;
