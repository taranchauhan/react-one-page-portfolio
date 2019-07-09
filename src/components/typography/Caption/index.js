import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CaptionText = styled.h1`
  color: darkgray;
  font-size: 38px;
  font-weight: 200;
  margin-top: 52px;
  max-width: 960px;
  line-height: 60px;
`;

function createMarkup(children) {
  return { __html: children };
}

const Caption = ({ children }) => (
  <CaptionText dangerouslySetInnerHTML={createMarkup(children)} />
);

Caption.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Caption;
