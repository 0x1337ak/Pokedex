import React from 'react';

import type { PokemonStatType } from '@/api';
import { Text, View } from '@/ui';

export const PokemonStatsBar = ({ stats }: { stats: PokemonStatType }) => {
  return (
    <View className="flex w-full flex-row ">
      <View className="w-28 border-r-[1px] border-gray-200  ">
        <Text className="mx-1  text-right text-sm font-bold text-green-500">
          {stats.stat.name}
        </Text>
      </View>
      <View className="flex-1 flex-row items-center px-2">
        <View className="mx-1 p-1">
          <Text>{stats.base_stat}</Text>
        </View>
        <View className="h-1 flex-1  overflow-hidden rounded-xl bg-green-100">
          <View
            className="absolute top-0 z-10 h-full bg-green-500"
            style={{ width: stats.base_stat + '%' }}
          />
        </View>
      </View>
    </View>
  );
};
