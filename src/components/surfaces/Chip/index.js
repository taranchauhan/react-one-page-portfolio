import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledChip = styled.div`
  margin-right: 5px;
  margin-bottom: 5px;
  color: rgba(0, 0, 0, 0.87);
  border: none;
  cursor: default;
  height: 32px;
  display: inline-flex;
  outline: none;
  padding: 0;
  font-size: 0.8125rem;
  box-sizing: border-box;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  white-space: nowrap;
  border-radius: 16px;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: #e0e0e0;
`;

const Label = styled.span`
  cursor: inherit;
  display: flex;
  align-items: center;
  user-select: none;
  white-space: nowrap;
  padding-left: 12px;
  padding-right: 12px;
`;

const Chip = ({ children }) => (
  <StyledChip>
    <Label>{children}</Label>
  </StyledChip>
);

Chip.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Chip;
