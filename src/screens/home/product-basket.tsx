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
    sharedVal.value = value > 0 ? '100%' : '0%';
    return {
      width: withTiming(sharedVal.value, { duration: 300 }),
    };
  }, [value]);

  return (
    <AnimView
      className="absolute bottom-0 right-0 m-1  w-full justify-end overflow-hidden"
      style={animatedStyle}
    >
      <View className="bottom-0 left-0 z-50 flex h-10 flex-row   items-center rounded-3xl bg-[#F4D97C] ">
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
  );
}
