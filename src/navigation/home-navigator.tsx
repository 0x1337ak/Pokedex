import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { Home, PokemonInfo } from '@/screens';

export type HomeStackParamList = {
  Home: undefined;
  PokemonInfo: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="PokemonInfo" component={PokemonInfo} />
    </Stack.Navigator>
  );
};
