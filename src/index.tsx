import 'react-native-gesture-handler';

import React from 'react';

import { Product } from './screens';
import { Text, View } from './ui';

const App = () => {
  return (
    <View>
      <Product />
      <Text>Hello</Text>
    </View>
  );
};

export default App;
