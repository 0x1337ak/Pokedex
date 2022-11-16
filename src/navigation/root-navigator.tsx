import React from 'react';

import { HomeNavigator } from './home-navigator';
import { NavigationContainer } from './navigation-container';

export const Root = () => {
  return <HomeNavigator />;
};

export const RootNavigator = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);
