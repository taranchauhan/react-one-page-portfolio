import React from 'react';
import BaseContainer from 'components/fixtures/BaseContainer';
import Card from 'components/surfaces/Card';

const Project = () => (
  <BaseContainer
    title="Navraj Singh"
    subtitle="Full Stack Developer"
    subtitleValue="Rexdale, Canada"
  >
    <Card />
    <Card flipped />
    <Card />
    <Card flipped />
    <Card />
    <Card flipped />
  </BaseContainer>
);

export default Project;
