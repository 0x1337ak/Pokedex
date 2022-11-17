import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Image, Pressable, Text, View } from '@/ui';
export type PokemonProps = {
  name: string;
  url: string;
};
export const PokemonCard = (pokeInfo: PokemonProps & { index: number }) => {
  const navigator = useNavigation();
  return (
    <View className="m-2 flex h-auto w-28  overflow-hidden rounded-xl border-2 border-green-400 bg-gray-100">
      <Pressable
        onPress={() => {
          navigator.navigate('PokemonInfo');
        }}
      >
        <View className=" flex-1">
          <Text className="mr-2 text-right text-green-400">
            #{pokeInfo.index}
          </Text>
        </View>
        <View className="m-auto  mt-1 h-28 w-28">
          <Image
            resizeMode="contain"
            className="h-full w-full"
            source={{
              uri: '',
            }}
          />
        </View>

        <View className="flex-1 bg-green-400 p-1 text-center">
          <Text className="text-center text-white">{pokeInfo.name}</Text>
        </View>
      </Pressable>
    </View>
  );
};
