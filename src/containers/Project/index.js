import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import FadeIn from 'react-lazyload-fadein';
import BaseContainer from 'components/fixtures/BaseContainer';
import Chip from 'components/surfaces/Chip';
import MainContext from 'context/MainContext';
import MainContextProvider from 'context/MainContextProvider';

const Description = styled.div`
  font-weight: 200;
  font-size: 15px;
  font-style: italic;
  word-wrap: break-word;
  margin: 25px 0 30px 0;
`;

const ResponsiveImage = styled.img`
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
  max-width: 100%;
  height: auto;

  background-color: white;
  box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
  -moz-box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  -webkit-box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
`;

const Subtitle = styled.p`
  margin-top: 0.5rem;
  font-weight: 900;
  font-size: 1.2rem;
`;

const ChipContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

function createMarkup(children) {
  return { __html: children };
}

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
              url={context.projects[pathname].url}
              socialIcons={context.profile.socialIcons}
            >
              <ChipContainer>
                {context.projects[pathname].technologies.map(tech => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </ChipContainer>
              <Description
                dangerouslySetInnerHTML={createMarkup(
                  context.projects[pathname].description,
                )}
              />
              {context.projects[pathname].images.map(image => (
                <FadeIn
                  key={image.caption}
                  height={600}
                  render={onload => (
                    <div onLoad={onload}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={context.projects[pathname].url}
                      >
                        <ResponsiveImage alt="Screenshot" src={image.ref} />
                      </a>
                      <Subtitle>{image.caption}</Subtitle>
                    </div>
                  )}
                />
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
