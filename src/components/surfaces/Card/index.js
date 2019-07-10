import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box } from '@smooth-ui/core-sc';

const ResponsiveImage = styled.img`
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
  max-width: 100%;
  height: auto;
`;

const Title = styled.span`
  margin-top: 0.5rem;
  font-weight: 900;
  font-size: 1.2rem;
`;

const Subtitle = styled.span`
  margin-top: 0.3rem;
  font-weight: 200;
  font-size: 0.9rem;
  color: darkgray;
`;

const Card = ({ name, subtitle, image, url }) => (
  <Box
    mb={25}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    backgroundColor="white"
  >
    <Link to={url}>
      <ResponsiveImage alt="Project" src={image} />
    </Link>
    <Title variant="h2">{name}</Title>
    <Subtitle variant="h6">{subtitle}</Subtitle>
  </Box>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
