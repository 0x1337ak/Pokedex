import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { HomeScreen, PokemonInfoScreen } from '@/screens';

export type HomeStackParamList = {
  Home: undefined;
  PokemonInfo: { name: string };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PokemonInfo"
        component={PokemonInfoScreen}
        options={{
          headerStyle: {
            backgroundColor: '#4ADE80',
          },
          headerTitleStyle: {
            color: '#f1f1f1',
          },
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
