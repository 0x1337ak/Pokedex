import React from 'react';

import { Image, Pressable, Text, View } from '@/ui';
import { Plus } from '@/ui';

export const Product = () => {
  return (
    <View className="bg-gray-100">
      <View className="h-28 w-28">
        <Image
          resizeMode="contain"
          className="h-full w-full"
          source={{
            uri: 'https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/419075/1.jpg?6969',
          }}
        />
      </View>

      <View className="p-1">
        <Text>Adidas</Text>
        <Text className="text-sm text-gray-400">180 g</Text>
      </View>

      <View className="p-1">
        <View>
          <Pressable
            className="flex h-12 w-12 rounded-full bg-yellow-400"
            onPress={() => console.log('hi')}
          >
            <View className="m-auto">
              <Plus color="#333" />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
