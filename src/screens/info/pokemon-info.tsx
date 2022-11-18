import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import type { SvgProps } from 'react-native-svg';

import type { PokemonMovesType } from '@/api';
import { usePokemon } from '@/api';
import { EmptyList, Image, Text, View } from '@/ui';
import { Ruler } from '@/ui/icons/ruler';
import { WeightScale } from '@/ui/icons/weight-scale';

import { PokemonStatsBar } from './pokemon-stat-bar';

type paramsType = { name: string };
export const PokemonInfoScreen = () => {
  const params = useRoute().params as paramsType;
  const { data, isLoading } = usePokemon(params?.name);

  return (
    <ScrollView>
      <View className="h-full w-full  bg-green-400">
        <View className="h-[30vh] ">
          <Image
            resizeMode="contain"
            className="absolute -bottom-10 z-10 h-full w-full"
            source={{
              uri: `https://img.pokemondb.net/sprites/home/normal/${params?.name}.png`,
            }}
          />
        </View>
        {isLoading ? (
          <EmptyList isLoading={isLoading} />
        ) : (
          <View className="m-2 flex min-h-[70vh] items-center rounded-xl bg-white">
            <View className="mt-10 flex w-full ">
              <View className="flex flex-row justify-center">
                {data?.types.map((item) => (
                  <Text
                    key={item.type.name}
                    className="m-1 rounded-xl bg-green-500 px-2  text-white"
                  >
                    {item.type.name}
                  </Text>
                ))}
              </View>
            </View>
            <View className="mt-1 items-center">
              <Text className="m-2 font-bold text-green-500">About</Text>
              <View className="mr-2 flex h-20 flex-row justify-center">
                <AboutItem
                  name="weight"
                  className="border-r-[1px] border-r-gray-200 p-2"
                  extraInfo={{ Icon: WeightScale, value: `${data?.weight} kg` }}
                />
                <AboutItem
                  name="Height"
                  className="flex items-center justify-center border-r-[1px] border-r-gray-200  p-2"
                  extraInfo={{ Icon: Ruler, value: `${data?.height} m` }}
                />
                <AboutItem
                  name="Moves"
                  className="flex items-center justify-center p-2"
                  extraInfo={data?.moves}
                />
              </View>
            </View>
            <View className="mt-1 px-2">
              <Text>
                There is a plant seed on its back right from the day this
                Pokémon is born. The seed slowly grows larger.
              </Text>
            </View>
            <View className="flex items-center px-1">
              <View>
                <Text className="font-bold text-green-500">Base Stats</Text>
              </View>
              <View className="w-full p-2">
                {data?.stats.map((item) => (
                  <PokemonStatsBar stats={item} />
                ))}
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

interface extraInfoType {
  Icon: ({ color, ...props }: SvgProps) => JSX.Element;
  value: string;
}

interface AboutProps {
  name: string;
  className: string;
  extraInfo: extraInfoType | (PokemonMovesType[] | undefined);
}
function AboutItem({ name, className, extraInfo }: AboutProps) {
  const info = extraInfo as extraInfoType;
  return (
    <View className={className}>
      {info.value ? (
        <View className="flex flex-1 flex-row items-center">
          <info.Icon />
          <Text className="mx-2 text-sm">{info.value}</Text>
        </View>
      ) : (
        <View className="mx-2 max-h-full flex-1 overflow-hidden">
          {(extraInfo as PokemonMovesType[]).map((item, index) => (
            <Text key={item + '' + index} className="text-sm">
              {item.move.name}
            </Text>
          ))}
        </View>
      )}
      <Text className="text-center text-sm text-gray-600">{name}</Text>
    </View>
  );
}
