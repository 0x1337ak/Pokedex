import React from 'react';
import { View } from 'react-native';

import { APIProvider } from '@/api';

import { Pokemons } from './pokemons';

export const Home = () => {
  return (
    <View>
      <APIProvider>
        <Pokemons />
      </APIProvider>
    </View>
  );
};
