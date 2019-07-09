import React from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import BaseContainer from 'components/fixtures/BaseContainer';
import Card from 'components/surfaces/Card';
import MainContext from 'context/MainContext';
import MainContextProvider from 'context/MainContextProvider';

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
                    xl={4}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    key={context.projects[key].name}
                  >
                    <Card
                      name={context.projects[key].name}
                      subtitle={`
                      ${context.projects[key].subtitle} - 
                      ${context.projects[key].subtitleValue}
                      `}
                      image={context.projects[key].images[0].ref}
                      url={context.projects[key].url}
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
