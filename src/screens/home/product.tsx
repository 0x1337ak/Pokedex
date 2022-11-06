import React from 'react';

import { Image, Pressable, Text, View } from '@/ui';
import { Plus } from '@/ui';

export const Product = () => {
  return (
    <View className="m-1 flex h-auto w-32 rounded-sm bg-gray-200">
      <View className="absolute top-0 left-0 z-10 p-2">
        <Text className="rounded-lg bg-red-500 p-1 text-sm text-white">
          -25%
        </Text>
      </View>

      <View className="m-auto  mt-1 h-32 w-32">
        <Image
          resizeMode="contain"
          className="h-full w-full"
          source={{
            uri: 'https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/419075/1.jpg?6969',
          }}
        />
      </View>

      <View className="flex-1 p-1">
        <Text>Adidas</Text>
        <Text className="text-sm text-gray-400">180 g</Text>
      </View>

      <View className="flex-auto p-1">
        <View className="flex flex-row">
          <View className="flex-1 ">
            <Text className="text-sm text-red-500 line-through">1.70$</Text>
            <Text>1.27$</Text>
          </View>

          <View>
            <Pressable
              className="flex  h-12 w-12 flex-1 rounded-full bg-yellow-400"
              onPress={() => console.log('hi')}
            >
              <View className="m-auto">
                <Plus color="#333" />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
