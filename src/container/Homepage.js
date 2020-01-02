import React from 'react';
import './homepage.styles.scss';
import Directory from '../component/directory/Directory';

import { HomePageContainer } from './Homepage.styles';

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
