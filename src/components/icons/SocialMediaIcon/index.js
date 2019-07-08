import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
`;

const StyledAnchor = styled.a`
  color: #737d8c;
`;

const SocialMediaIcon = ({ children, link }) => (
  <IconContainer>
    <StyledAnchor target="_blank" href={link}>
      {children}
    </StyledAnchor>
  </IconContainer>
);

SocialMediaIcon.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};

export default SocialMediaIcon;
