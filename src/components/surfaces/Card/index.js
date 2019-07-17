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

  background-color: white;
  box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
  -moz-box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  -webkit-box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
`;

const StyledAnchor = styled(Link)`
  color: black;
  text-decoration: none;
  width: 100%;
  &:visited,
  &:active {
    color: black;
  }
  &:hover {
    text-decoration: underline;
    text-decoration-skip-ink: none;
  }
`;

const Title = styled.span`
  margin-top: 0.5rem;
  font-weight: 900;
  font-size: 1.2rem;
  text-decoration: none;
`;

const Subtitle = styled.span`
  margin-top: 0.3rem;
  font-weight: 200;
  font-size: 0.9rem;
  color: darkgray;
`;

const Card = ({ onLoad, name, subtitle, image, url }) => (
  <Box
    onLoad={onLoad}
    mb={25}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    backgroundColor="white"
  >
    <Link to={url}>
      <ResponsiveImage alt="Project" src={image} />
    </Link>

    <Title>
      <StyledAnchor to={url}>{name}</StyledAnchor>
    </Title>

    <Subtitle>{subtitle}</Subtitle>
  </Box>
);

Card.propTypes = {
  onLoad: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
