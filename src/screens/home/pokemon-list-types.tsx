import * as React from 'react';

import type { PokemonType } from '@/api';
import { usePokemonListType } from '@/api';
import { Text, View } from '@/ui';

import { PokemonTypeCard } from './pokemon-type-card';

export const Categories = () => {
  const { data, isLoading } = usePokemonListType();

  return (
    <View className="mt-2  h-fit w-full flex-1">
      <View className="m-1 h-10 flex-1">
        <Text className="p-1 text-lg">
          {isLoading ? 'No Type Yet' : 'Pokemon Types'}
        </Text>
      </View>

      <View className="pl-4">
        <View className="flex  flex-row  flex-wrap  overflow-y-auto ">
          {!isLoading &&
            data?.map((item: PokemonType) => {
              return <PokemonTypeCard {...item} key={item.name} />;
            })}
        </View>
      </View>
    </View>
  );
};
