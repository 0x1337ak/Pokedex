import 'react-native-gesture-handler';

import React from 'react';

import { Product } from './screens';
import { Text, View } from './ui';

const App = () => {
  return (
    <View>
      <Product />
      <View className="bg-black">
        <Text>way</Text>
      </View>
    </View>
  );
};

export default App;
