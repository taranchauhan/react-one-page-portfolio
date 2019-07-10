import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import BaseContainer from 'components/fixtures/BaseContainer';
import Chip from 'components/surfaces/Chip';
import MainContext from 'context/MainContext';
import MainContextProvider from 'context/MainContextProvider';

const Description = styled.p`
  font-weight: 200;
  font-size: 15px;
  font-style: italic;
  word-wrap: break-word;
`;

const ResponsiveImage = styled.img`
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
  max-width: 100%;
  height: auto;
`;

const Subtitle = styled.p`
  margin-top: 0.5rem;
  font-weight: 400;
  font-size: 1.2rem;
`;

const ChipContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Project = ({ location }) => {
  let { pathname } = location;
  pathname = pathname.split('/');
  [, , pathname] = pathname;
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
              <ChipContainer>
                {context.projects[pathname].technologies.map(tech => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </ChipContainer>
              <Description>
                {context.projects[pathname].description}
              </Description>
              {context.projects[pathname].images.map(image => (
                <div key={image.caption}>
                  <ResponsiveImage alt="Screenshot" src={image.ref} />
                  <Subtitle>{image.caption}</Subtitle>
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
