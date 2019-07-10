import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const Fade = styled.div`
  visibility: ${props => (props.out ? 'hidden' : 'visible')};
  animation: ${props => (props.out ? fadeOut : fadeIn)} 1s linear;
  transition: visibility 1s linear;
`;

const withFade = Component => {
  class FadeComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: true,
      };
    }

    componentWillUnmount() {
      this.setState({
        visible: false,
      });
    }

    render() {
      const { visible } = this.state;
      return (
        <Fade out={!visible}>
          <Component {...this.props} />
        </Fade>
      );
    }
  }

  return FadeComponent;
};

export default withFade;
