import * as React from 'react';

import type { PokemonType } from '@/api';
import { pokemonTypeSprites } from '@/api';
import { Image, Text, View } from '@/ui';

export const Category = (typeInfo: PokemonType) => {
  return (
    <View className="m-1 w-[30%] overflow-hidden  rounded-lg bg-gray-200">
      <View className="h-14  p-1">
        <Text className="text-base">{typeInfo.name}</Text>
      </View>
      <View className=" flex h-28 w-full flex-row-reverse items-end justify-end  pr-2">
        <Image
          className="h-full w-full"
          source={{
            uri: pokemonTypeSprites[typeInfo.name],
          }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};
