import * as React from 'react';

import type { PokemonType } from '@/api';
import { usePokemonListType } from '@/api';
import { Text, View } from '@/ui';

import { Category } from './pokemon-type-card';

export const Categories = () => {
  const { data, isLoading } = usePokemonListType();

  return (
    <View className="mt-2  h-fit w-full flex-1  bg-green-400">
      <View className="h-10 flex-1 ">
        <Text>{isLoading ? 'No Category Yet' : 'Categories'}</Text>
      </View>

      <View className="m-auto flex h-fit flex-row   flex-wrap overflow-y-auto bg-blue-600 pl-3 ">
        {!isLoading &&
          data?.map((item: PokemonType) => {
            return <Category {...item} key={item.name} />;
          })}
      </View>
    </View>
  );
};
