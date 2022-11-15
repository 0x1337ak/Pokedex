import React from 'react';

import { Image, Text, View } from '@/ui';
export type PokemonProps = {
  name: string;
  url: string;
};
export const PokemonCard = (pokeInfo: PokemonProps & { index: number }) => {
  return (
    <View className="m-1 flex h-auto w-32  overflow-hidden rounded-xl border-2 border-green-400 bg-gray-100">
      <View className=" flex-1">
        <Text className="mr-2 text-right text-green-400">
          #{pokeInfo.index}
        </Text>
      </View>
      <View className="m-auto  mt-1 h-32 w-28">
        <Image
          resizeMode="contain"
          className="h-full w-full"
          source={{
            uri: 'https://static.wikia.nocookie.net/pokemon/images/1/13/053Persian.png/revision/latest?cb=20140328195856',
          }}
        />
      </View>

      <View className="flex-1 bg-green-400 p-1 text-center">
        <Text className="text-center text-white">{pokeInfo.name}</Text>
      </View>
    </View>
  );
};
