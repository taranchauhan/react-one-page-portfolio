import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SocialMediaIcons from 'components/icons/SocialMediaIcons';
import Heading from 'components/typography/Heading';
import Subtitle from 'components/typography/Subtitle';
import Caption from 'components//typography/Caption';
import Footer from 'components/fixtures/Footer';

const StyledContainer = styled.div`
  @media only screen and (max-width: 991px) {
    margin: 0px 15px 0px 15px;
  }
  max-width: 960px;
  padding: 50px 0px;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 75px;
`;

const BaseContainer = ({
  title,
  subtitle,
  subtitleValue,
  caption,
  socialIcons,
  children,
}) => (
  <StyledContainer>
    <SocialMediaIcons icons={socialIcons} />
    <Heading>{title}</Heading>
    <Subtitle subtitle={subtitle} subtitleValue={subtitleValue} />
    <Caption>{caption}</Caption>
    <ContentContainer>{children}</ContentContainer>
    <Footer />
  </StyledContainer>
);

BaseContainer.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  subtitleValue: PropTypes.string.isRequired,
  caption: PropTypes.node.isRequired,
  socialIcons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  children: PropTypes.node.isRequired,
};

export default BaseContainer;
