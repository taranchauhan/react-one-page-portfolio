import React from 'react';
import styled from 'styled-components';
import {
  FaGithub,
  FaHackerrank,
  FaLinkedin,
  FaStackOverflow,
} from 'react-icons/fa';
import SocialMediaIcon from 'components/icons/SocialMediaIcon';

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialMediaIcons = () => (
  <IconsContainer>
    <SocialMediaIcon link="https://github.com">
      <FaGithub />
    </SocialMediaIcon>
    <SocialMediaIcon link="https://hackerrank.com">
      <FaHackerrank />
    </SocialMediaIcon>
    <SocialMediaIcon link="https://linkedin.com">
      <FaLinkedin />
    </SocialMediaIcon>
    <SocialMediaIcon link="https://stackoverflow.com">
      <FaStackOverflow />
    </SocialMediaIcon>
  </IconsContainer>
);

export default SocialMediaIcons;
