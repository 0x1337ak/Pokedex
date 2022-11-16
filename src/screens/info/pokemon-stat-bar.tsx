import React from 'react';

import { Text, View } from '@/ui';

export const PokemonStatsBar = () => {
  return (
    <View className="flex w-full flex-row ">
      <View className="w-16 border-r-[1px] border-gray-200 p-1 ">
        <Text className="m-1 mr-3 text-right text-sm font-bold text-green-500">
          HP
        </Text>
      </View>
      <View className="flex-1 flex-row items-center px-2">
        <View className="mx-1 p-1">
          <Text>045</Text>
        </View>
        <View className="h-1 flex-1  overflow-hidden rounded-xl bg-green-100">
          <View className="absolute top-0 z-10 h-full w-16 bg-green-500" />
        </View>
      </View>
    </View>
  );
};
