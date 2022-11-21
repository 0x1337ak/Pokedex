import React from 'react';

import { APIProvider } from '@/api';

import { HomeNavigator } from './home-navigator';
import { NavigationContainer } from './navigation-container';

export const Root = () => {
  return <HomeNavigator />;
};

export const RootNavigator = () => (
  <NavigationContainer>
    <APIProvider>
      <Root />
    </APIProvider>
  </NavigationContainer>
);
