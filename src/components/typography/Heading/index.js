import React from 'react';
import { Typography } from '@smooth-ui/core-sc';
import PropTypes from 'prop-types';

const Heading = ({ children }) => (
  <Typography variant="h1">{children}</Typography>
);

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading;
