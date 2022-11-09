import type { Style } from 'nativewind/dist/style-sheet/runtime';
import * as React from 'react';
import type { LayoutChangeEvent } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { AnimView, Text } from '@/ui';

type props = { val: number; animationIndex: number; style?: Style };

export const HeaderCard = ({
  val,
  animationIndex,
}: props): React.ReactElement => {
  const shareVal = useSharedValue(0);
  const width = useSharedValue(0);

  const animStyle2 = useAnimatedStyle(() => {
    let offset = animationIndex ? 1 : 2;
    offset *= -width.value;
    let config = { duration: 500 };
    if (animationIndex != -1) {
      shareVal.value = withTiming(offset, config);
    } else {
      shareVal.value = 100;
    }

    return {
      transform: [{ translateX: shareVal.value }],
    };
  }, [animationIndex]);

  const onLayout = (event: LayoutChangeEvent) => {
    width.value = event.nativeEvent.layout.width;
    console.log(width.value);
  };
  return (
    <AnimView
      onLayout={onLayout}
      key={val}
      className="absolute  right-[calc(-100%)] ml-1 h-full w-full translate-x-0 rounded-lg border-2 border-red-500 bg-blue-500"
      style={animStyle2}
    >
      <Text className="m-auto">{val}</Text>
    </AnimView>
  );
};
