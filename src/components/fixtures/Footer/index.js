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

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      showFooter: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const scroll = {
      y: window.pageYOffset || event.target.documentElement.scrollTop,
    };

    if (scroll.y > 200) {
      this.setState({ showFooter: true });
    } else if (scroll.y < 200) {
      this.setState({ showFooter: false });
    }
  }

  render() {
    const { showFooter } = this.state;
    return showFooter ? (
      <FooterContainer>
        <CentralAlign>
          <BackToTopButton scrollStepInPx="50" delayInMs="16.66" />
        </CentralAlign>
      </FooterContainer>
    ) : null;
  }
}

export default Footer;
