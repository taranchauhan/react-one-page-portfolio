import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/typography/Heading';
import Subtitle from 'components/typography/Subtitle';
import Footer from 'components/fixtures/Footer';

const StyledContainer = styled.main`
  border-top: 10px solid;
  flex: 1;
  padding: 50px;
  width: 100%;
`;

const BaseContainer = ({ title, subtitle, subtitleValue, children }) => (
  <StyledContainer>
    <Heading>{title}</Heading>
    <Subtitle subtitle={subtitle} subtitleValue={subtitleValue} />
    <React.Fragment>{children}</React.Fragment>
    <Footer />
  </StyledContainer>
);

BaseContainer.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  subtitleValue: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BaseContainer;
