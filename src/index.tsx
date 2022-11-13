import 'react-native-gesture-handler';

import React from 'react';

import { ScrollView } from '@/ui';

import { APIProvider } from './api';
import { CardCarousel, Offers } from './screens';
import { Categories } from './screens/home/pokemon-list-types';

const App = () => {
  return (
    <ScrollView>
      <CardCarousel />
      <Offers />
      <APIProvider>
        <Categories />
      </APIProvider>
    </ScrollView>
  );
};

export default App;
