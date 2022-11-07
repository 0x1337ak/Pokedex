import React, { useState } from 'react';

import { Image, Plus, Pressable, Text, View } from '@/ui';

import { ProductBasket } from './product-basket';

export const Product = () => {
  const [count, setCount] = useState(0);

  return (
    <View className="m-1 flex h-auto w-32 rounded-xl bg-gray-200 p-1">
      <View className="absolute top-0 left-0 z-10 flex w-full flex-row justify-around p-2">
        <Text className="rounded-lg bg-orange-600 p-1 text-sm text-white">
          -25%
        </Text>
        <Text className="rounded-lg bg-purple-800 p-1 text-sm text-white">
          vegan
        </Text>
      </View>

      <View className="m-auto  mt-1 h-32 w-28">
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

      <View className="flex-auto">
        <View className="flex flex-row rounded-xl">
          <View className="flex-1 ">
            <Text className="text-xs text-red-700 line-through">1.70$</Text>
            <Text>1.27$</Text>
          </View>
          <View className="h-10 w-10">
            <Pressable
              className="flex  h-full w-full flex-1 rounded-full bg-yellow-400"
              onPress={() => setCount((prev) => prev + 1)}
            >
              <View className="m-auto">
                <Plus color="#333" />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <ProductBasket callBack={setCount} value={count} />
    </View>
  );
};
