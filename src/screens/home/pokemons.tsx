import * as React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { usePokemonList } from '@/api/home/use-pokemons';
import { EmptyList, Input, View } from '@/ui';

import type { PokemonProps } from './pokemon-card';
import { PokemonCard } from './pokemon-card';

export const Pokemons = () => {
  const { data, isLoading } = usePokemonList();
  const renderItem = React.useCallback(
    ({ item, index }: { item: PokemonProps; index: number }) => (
      <PokemonCard {...item} index={index} />
    ),
    []
  );

  return (
    <View className="ml-1 h-[100%]">
      <Input />
      <FlatList
        renderItem={renderItem}
        data={data}
        numColumns={3}
        keyExtractor={(_, index) => `pokemon-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isLoading} />}
      />
    </View>
  );
};
