import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const SocialMediaIcons = ({ icons }) => (
  <React.Fragment>
    {icons.length ? (
      <IconsContainer>
        {icons.map(
          icon =>
            icon.url && (
              <SocialMediaIcon key={icon.name} link={icon.url}>
                {icon.name === 'github' && <FaGithub />}
                {icon.name === 'hackerrank' && <FaHackerrank />}
                {icon.name === 'linkedin' && <FaLinkedin />}
                {icon.name === 'stackoverflow' && <FaStackOverflow />}
              </SocialMediaIcon>
            ),
        )}
      </IconsContainer>
    ) : null}
  </React.Fragment>
);

SocialMediaIcons.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SocialMediaIcons;
