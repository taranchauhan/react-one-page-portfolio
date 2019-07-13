import React from 'react';
import PropTypes from 'prop-types';

import { profile, projects } from 'config';
import MainContext from './MainContext';

const MainContextProvider = ({ children }) => (
  <MainContext.Provider
    value={{
      profile,
      projects,
    }}
  >
    {children}
  </MainContext.Provider>
);

MainContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContextProvider;
