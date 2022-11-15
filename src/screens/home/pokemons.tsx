import { FlashList } from '@shopify/flash-list';
import * as React from 'react';

import { usePokemonList } from '@/api/home/use-pokemons';
import { ArrowRight, EmptyList, Pressable, Text, View } from '@/ui';

import type { PokemonProps } from './pokemon-card';
import { PokemonCard } from './pokemon-card';

export const Pokemons = () => {
  const { data, isLoading } = usePokemonList();
  const [offset, setOffset] = React.useState(5);
  const renderItem = React.useCallback(
    ({ item, index }: { item: PokemonProps; index: number }) => (
      <PokemonCard {...item} index={index} />
    ),
    []
  );

  return (
    <View className="h-72  bg-red-400 p-1">
      <View className="mb-2 flex flex-row justify-between p-1">
        <Text className="p-1 text-lg">{isLoading ? 'NO' : 'Pokemons'} 🔥</Text>
        <View className="h-10 rounded-2xl bg-white p-2">
          <Pressable
            className="h-full w-full"
            onPress={() => setOffset(offset + 5)}
          >
            <Text>see All {<ArrowRight color="#333" />}</Text>
          </Pressable>
        </View>
      </View>
      <FlashList
        renderItem={renderItem}
        data={data?.slice(0, offset)}
        estimatedListSize={{ height: 210, width: 128 }}
        estimatedItemSize={210}
        horizontal={true}
        keyExtractor={(_, index) => `pokemon-${index}`}
        refreshing={isLoading}
        ListEmptyComponent={<EmptyList isLoading={isLoading} />}
        onScrollAnimationEnd={() => setOffset((prev) => prev + 1)}
      />
    </View>
  );
};
