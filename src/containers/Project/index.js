import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import BaseContainer from 'components/fixtures/BaseContainer';
import { Typography } from '@smooth-ui/core-sc';
import MainContext from 'context/MainContext';
import MainContextProvider from 'context/MainContextProvider';

const Project = ({ location }) => {
  let { pathname } = location;
  pathname = pathname.split('/');
  [, , pathname] = pathname;
  console.log(pathname);
  return (
    <MainContextProvider>
      <MainContext.Consumer>
        {context =>
          context.profile &&
          context.projects[pathname] && (
            <BaseContainer
              title={context.projects[pathname].name}
              subtitle={context.projects[pathname].subtitle}
              subtitleValue={context.projects[pathname].subtitleValue}
              caption={context.projects[pathname].caption}
              socialIcons={context.profile.socialIcons}
            >
              <p>{context.projects[pathname].description}</p>
              <Typography variant="h6">Technologies used</Typography>
              <p>{context.projects[pathname].technologies.join(', ')}</p>
              {context.projects[pathname].images.map(image => (
                <div key={image.url}>
                  <img alt="Screenshot" src={image.ref} />
                  <caption>{image.caption}</caption>
                </div>
              ))}
            </BaseContainer>
          )
        }
      </MainContext.Consumer>
    </MainContextProvider>
  );
};

Project.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Project);
