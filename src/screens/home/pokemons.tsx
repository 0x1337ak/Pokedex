import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

import type { PokemonType } from '@/api';
import { usePokemonList } from '@/api/home/use-pokemons';
import { EmptyList, Input, View } from '@/ui';

import { PokemonCard } from './pokemon-card';

export const Pokemons = () => {
  const { data, isLoading } = usePokemonList();
  const [textFilter, SetSearch] = useState('');
  const renderItem = React.useCallback(
    ({ item, index }: { item: PokemonType; index: number }) => (
      <PokemonCard {...item} index={index} />
    ),
    []
  );

  const handleInputTextChange = (text: string) => {
    SetSearch(text);
  };
  return (
    <View className="flex h-[100%] items-center justify-center ">
      <View className="w-full p-3">
        <Input onChangeText={handleInputTextChange} />
      </View>
      <FlatList
        renderItem={renderItem}
        data={data?.filter((item) => item.name.includes(textFilter))}
        numColumns={3}
        keyExtractor={(_, index) => `pokemon-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isLoading} />}
      />
    </View>
  );
};
