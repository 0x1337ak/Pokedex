import 'react-native-gesture-handler';

import React from 'react';

import { Carousel, Offers } from './screens';
import { View } from './ui';

const App = () => {
  return (
    <View>
      <Carousel />
      <Offers />
    </View>
  );
};

export default App;
