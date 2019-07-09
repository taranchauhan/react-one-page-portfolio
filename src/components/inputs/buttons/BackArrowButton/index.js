import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import BackArrowIcon from 'components/icons/BackArrowIcon';

const StyledButton = styled.span`
  outline: 0;
  position: absolute;
  top: 50px;
`;

class BackArrowButton extends React.Component {
  goBack() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { history } = this.props;
    const { action } = history;

    return (
      <div>
        {action === 'PUSH' && (
          <StyledButton
            tabIndex="0"
            role="button"
            onKeyDown={() => {
              this.goBack();
            }}
            onClick={() => {
              this.goBack();
            }}
          >
            <BackArrowIcon />
          </StyledButton>
        )}
      </div>
    );
  }
}

BackArrowButton.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    action: PropTypes.string,
  }).isRequired,
};

export default withRouter(BackArrowButton);
