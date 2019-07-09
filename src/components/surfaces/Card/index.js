import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Box, Button, Typography } from '@smooth-ui/core-sc';
import useMedia from 'utils/hooks/useMedia';

const ResponsiveImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Description = styled.p`
  font-weight: 200;
  font-size: 15px;
  font-style: italic;
  word-wrap: break-word;
`;

const SectionA = ({ name, subtitle, description, url }) => (
  <Col xl={9} lg={9} md={8} sm={12} xs={12}>
    <Box
      display="flex"
      justifyContent="space-evenly"
      flexDirection="column"
      backgroundColor="white"
    >
      <Typography variant="h2">{name}</Typography>
      <Typography variant="h6">{subtitle}</Typography>
      <Description>{description}</Description>

      <Link to={url}>
        <Button mb={10} alignSelf="flex-start" variant="dark">
          Learn more
        </Button>
      </Link>
    </Box>
  </Col>
);

const SectionB = ({ image }) => (
  <Col xl={3} lg={3} md={4} sm={12} xs={12}>
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      backgroundColor="white"
    >
      <ResponsiveImage alt="Project" src={image} />
    </Box>
  </Col>
);

const Card = ({ name, subtitle, description, url, image, flipped }) => {
  const isSmallScreen = useMedia('(max-width: 767px)');
  return (
    <Grid mt={20} ml={0} mr={0}>
      {!flipped || isSmallScreen ? (
        <Row>
          <SectionA
            name={name}
            subtitle={subtitle}
            description={description}
            url={url}
          />
          <SectionB image={image} />
        </Row>
      ) : (
        <Row>
          <SectionB image={image} />
          <SectionA
            name={name}
            subtitle={subtitle}
            description={description}
            url={url}
          />
        </Row>
      )}
    </Grid>
  );
};

SectionA.propTypes = {
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

SectionB.propTypes = {
  image: PropTypes.string.isRequired,
};

Card.propTypes = {
  flipped: PropTypes.bool,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

Card.defaultProps = {
  flipped: false,
};

export default Card;
