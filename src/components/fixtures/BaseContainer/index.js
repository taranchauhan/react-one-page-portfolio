import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/typography/Heading';
import Subtitle from 'components/typography/Subtitle';
import Footer from 'components/fixtures/Footer';

const StyledContainer = styled.div`
  margin: 20px 20px 20px 20px;
`;

const ContentContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 75px;
`;

const BaseContainer = ({ title, subtitle, subtitleValue, children }) => (
  <StyledContainer>
    <Heading>{title}</Heading>
    <Subtitle subtitle={subtitle} subtitleValue={subtitleValue} />
    <ContentContainer>{children}</ContentContainer>
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
