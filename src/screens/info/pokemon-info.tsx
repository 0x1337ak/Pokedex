import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import type { SvgProps } from 'react-native-svg';

import { Image, Plus, Text, View } from '@/ui';

import { PokemonStatsBar } from './pokemon-stat-bar';

export const PokemonInfo = () => {
  return (
    <ScrollView>
      <View className="h-full w-full  bg-green-400">
        <View className="h-[30vh] ">
          <Image
            resizeMode="contain"
            className="absolute -bottom-10 z-10 h-full w-full"
            source={{
              uri: 'https://static.wikia.nocookie.net/pokemon/images/3/3b/077Ponyta.png/revision/latest?cb=20140328203941',
            }}
          />
        </View>
        <View className="m-2 flex h-[70vh] items-center rounded-xl bg-white">
          <View className="mt-10 flex w-full ">
            <View className="flex flex-row justify-center">
              <Text className="m-1 rounded-xl bg-green-500 px-2  text-white">
                Grass
              </Text>
              <Text className="m-1 rounded-xl bg-purple-500 px-2 text-white">
                Poison
              </Text>
            </View>
          </View>
          <View className="mt-1 items-center">
            <Text className="m-2 font-bold text-green-500">About</Text>
            <View className="mr-4 flex h-20 flex-row justify-center">
              <AboutItem
                name="weight"
                className="border-r-[1px] border-r-gray-200 p-2"
                extraInfo={{ Icon: Plus, value: 4 }}
              />
              <AboutItem
                name="Height"
                className="flex items-center justify-center border-r-[1px] border-r-gray-200  p-2"
                extraInfo={{ Icon: Plus, value: 4 }}
              />
              <AboutItem
                name="Moves"
                className="flex items-center justify-center p-2"
                extraInfo={['move1', 'move2']}
              />
            </View>
          </View>
          <View className="mt-1 px-2">
            <Text>
              There is a plant seed on its back right from the day this Pokémon
              is born. The seed slowly grows larger.
            </Text>
          </View>
          <View className="flex items-center px-1">
            <View>
              <Text className="font-bold text-green-500">Base Stats</Text>
            </View>
            <View className="w-full p-2">
              <PokemonStatsBar />
              <PokemonStatsBar />
              <PokemonStatsBar />
              <PokemonStatsBar />
              <PokemonStatsBar />
              <PokemonStatsBar />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

interface extraInfoType {
  Icon: ({ color, ...props }: SvgProps) => JSX.Element;
  value: number;
}

interface AboutProps {
  name: string;
  className: string;
  extraInfo: extraInfoType | string[];
}
function AboutItem({ name, className, extraInfo }: AboutProps) {
  const info = extraInfo as extraInfoType;
  return (
    <View className={className}>
      {info?.value ? (
        <View className="flex flex-1 flex-row items-center ">
          <info.Icon />
          <Text className="text-sm">6,9 kg</Text>
        </View>
      ) : (
        <View className="flex-1">
          {(extraInfo as string[]).map((item, index) => (
            <Text key={item + '' + index} className="text-sm">
              {item}
            </Text>
          ))}
        </View>
      )}
      <Text className="text-center text-sm text-gray-600">{name}</Text>
    </View>
  );
}
