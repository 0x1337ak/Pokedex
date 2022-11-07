import type { ReactNode } from 'react';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { PlusThin, Pressable, Text, Trash, View } from '@/ui';

interface Props {
  callBack: React.Dispatch<React.SetStateAction<number>>;
  value: Number & ReactNode;
}
const AnimView = Animated.createAnimatedComponent(View);

export function ProductBasket({ callBack, value = 1 }: Props) {
  const sharedVal = useSharedValue('100%');
  const animatedStyle = useAnimatedStyle(() => {
    sharedVal.value = value > 0 ? '100%' : '33%';
    return {
      width: withTiming(sharedVal.value, { duration: 300 }),
    };
  }, [value]);

  return (
    <View>
      <AnimView
        className="absolute bottom-0 right-0 h-10  w-full bg-gray-200"
        style={animatedStyle}
      />
      <AnimView
        className="absolute bottom-0 right-0  h-10  w-full justify-end overflow-hidden rounded-3xl bg-[#F4D97C]"
        style={animatedStyle}
      >
        <View className="absolute bottom-0 right-0 z-50 flex h-10 w-32 flex-row  items-center  px-1">
          <View className="h-7 w-8 rounded-full">
            <Pressable
              className="h-full max-w-full"
              onPress={() => callBack((prev) => prev - 1)}
            >
              <View className="m-auto">
                <Trash color="#333" />
              </View>
            </Pressable>
          </View>
          <View className="h-full flex-1">
            <Text className="m-auto">{value}</Text>
          </View>
          <View className="h-7 w-8 rounded-full  ">
            <Pressable
              className="h-full w-full"
              onPress={() => callBack((prev) => prev + 1)}
            >
              <View className="m-auto">
                <PlusThin color="#333" />
              </View>
            </Pressable>
          </View>
        </View>
      </AnimView>
    </View>
  );
}
