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
  goHome() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { location } = this.props;
    const { pathname } = location;

    return (
      <div>
        {pathname !== '/' && (
          <StyledButton
            tabIndex="0"
            role="button"
            onKeyDown={() => {
              this.goHome();
            }}
            onClick={() => {
              this.goHome();
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
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(BackArrowButton);
