import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BackToTopIcon from 'components/icons/BackToTopIcon';

const StyledButton = styled.span`
  outline: 0;
`;

export default class BackToTopButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: 0,
    };
  }

  scrollStep() {
    const { intervalId } = this.state;
    const { scrollStepInPx } = this.props;
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  }

  scrollToTop() {
    const { delayInMs } = this.props;
    const intervalId = setInterval(this.scrollStep.bind(this), delayInMs);
    this.setState({ intervalId });
  }

  render() {
    return (
      <StyledButton
        tabIndex="0"
        role="button"
        onKeyDown={() => {
          this.scrollToTop();
        }}
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <BackToTopIcon />
      </StyledButton>
    );
  }
}

BackToTopButton.propTypes = {
  delayInMs: PropTypes.string.isRequired,
  scrollStepInPx: PropTypes.string.isRequired,
};
