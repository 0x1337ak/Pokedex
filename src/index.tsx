import 'react-native-gesture-handler';

import React from 'react';

import { Offers } from './screens';
import { View } from './ui';

const App = () => {
  return (
    <View>
      <Offers />
      <View className="h-72 bg-blue-500" />
    </View>
  );
};

export default App;
