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

const SectionA = () => (
  <Col xl={10} lg={9} md={8} sm={12} xs={12}>
    <Box
      display="flex"
      justifyContent="space-evenly"
      flexDirection="column"
      backgroundColor="white"
    >
      <Typography variant="h2">Perfect Timing</Typography>
      <Typography variant="h6">EP Collab with Metroboomin - 2019</Typography>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        vestibulum nisl ut nisi viverra, at interdum elit placerat. Mauris
        lacinia maximus velit id egestas. Sed pulvinar dignissim massa, nec
        hendrerit quam ultrices non. Donec volutpat turpis blandit odio posuere
        ultrices. Proin nec eros lorem. Integer feugiat pulvinar pellentesque.
        Maecenas risus neque, lobortis vel dapibus vitae, volutpat eu tellus. Ut
        sollicitudin odio mi, posuere imperdiet sem aliquet vitae.
      </Description>

      <Link to="/project/app">
        <Button mb={10} alignSelf="flex-start" variant="dark">
          Learn more
        </Button>
      </Link>
    </Box>
  </Col>
);

const SectionB = () => (
  <Col xl={2} lg={3} md={4} sm={12} xs={12}>
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      backgroundColor="white"
    >
      <ResponsiveImage alt="Project" src="https://via.placeholder.com/300" />
    </Box>
  </Col>
);

const Card = ({ flipped }) => {
  const isSmallScreen = useMedia('(max-width: 767px)');
  return (
    <Grid mt={20} ml={0} mr={0}>
      {!flipped || isSmallScreen ? (
        <Row>
          <SectionA />
          <SectionB />
        </Row>
      ) : (
        <Row>
          <SectionB />
          <SectionA />
        </Row>
      )}
    </Grid>
  );
};

Card.propTypes = {
  flipped: PropTypes.bool,
};

Card.defaultProps = {
  flipped: false,
};

export default Card;
