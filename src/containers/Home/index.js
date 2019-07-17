import React from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import FadeIn from 'react-lazyload-fadein';
import BaseContainer from 'components/fixtures/BaseContainer';
import MainContext from 'context/MainContext';
import MainContextProvider from 'context/MainContextProvider';
import Card from 'components/surfaces/Card';

const Home = () => (
  <MainContextProvider>
    <MainContext.Consumer>
      {context =>
        context.profile && (
          <BaseContainer
            title={context.profile.name}
            subtitle={context.profile.subtitle}
            subtitleValue={context.profile.subtitleValue}
            caption={context.profile.caption}
            socialIcons={context.profile.socialIcons}
          >
            <Grid pl={0} pr={0}>
              <Row>
                {Object.keys(context.projects).map(key => (
                  <Col
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    key={context.projects[key].name}
                  >
                    <FadeIn
                      height={600}
                      render={onload => (
                        <Card
                          onLoad={onload}
                          name={context.projects[key].name}
                          subtitle={`
                        ${context.projects[key].subtitle} - 
                        ${context.projects[key].subtitleValue}
                        `}
                          image={context.projects[key].images[0].ref}
                          url={`/project/${key}`}
                        />
                      )}
                    />
                  </Col>
                ))}
              </Row>
            </Grid>
          </BaseContainer>
        )
      }
    </MainContext.Consumer>
  </MainContextProvider>
);

export default Home;
