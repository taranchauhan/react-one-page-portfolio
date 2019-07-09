import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SubtitleContainer = styled.div`
  display: flex;
  width: 100%;
`;

const SubtitleLeft = styled.span`
  color: #198c6a;
`;

const SubtitleRight = styled.span`
  margin-left: 5px;
  color: #59615f;
`;

const Subtitle = ({ subtitle, subtitleValue }) => (
  <SubtitleContainer>
    <SubtitleLeft>{subtitle}</SubtitleLeft>
    <SubtitleRight> - {subtitleValue}</SubtitleRight>
  </SubtitleContainer>
);

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  subtitleValue: PropTypes.string.isRequired,
};

export default Subtitle;
