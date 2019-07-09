import React from 'react';
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
            {Object.keys(context.projects).map((key, index) => (
              <Card
                name={context.projects[key].name}
                subtitle={`
                ${context.projects[key].subtitle} - 
                ${context.projects[key].subtitleValue}
                `}
                description={context.projects[key].description}
                url={context.projects[key].url}
                image={context.projects[key].images[0].ref}
                key={context.projects[key].name}
                flipped={(index + 1) % 2 === 0}
              />
            ))}
          </BaseContainer>
        )
      }
    </MainContext.Consumer>
  </MainContextProvider>
);

export default Home;
