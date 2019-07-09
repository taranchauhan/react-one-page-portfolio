import React from 'react';
import styled from 'styled-components';
import BackToTopButton from 'components/inputs/buttons/BackToTopButton';

const FooterContainer = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: #e9f0ee;
  text-align: center;
  border-bottom: 10px solid black;
`;

const CentralAlign = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const Footer = () => (
  <FooterContainer>
    <CentralAlign>
      <BackToTopButton scrollStepInPx="50" delayInMs="16.66" />
    </CentralAlign>
  </FooterContainer>
);

export default Footer;
