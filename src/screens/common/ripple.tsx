import * as React from 'react';
import type { LayoutChangeEvent } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import { View } from '@/ui';
const AnimView = Animated.createAnimatedComponent(View);

type Props = { value: Number };

export const Ripple = ({ value }: Props) => {
  const radius = useSharedValue(0);
  const ripple = useAnimatedStyle(() => {
    return {
      width: value > 0 ? 1 : withTiming(0, { duration: 300 }),
      height: value > 0 ? 1 : withTiming(0, { duration: 300 }),
      transform: [
        {
          scaleX: withDelay(
            50,
            withTiming(value > 0 ? radius.value : 0, { duration: 300 })
          ),
        },
        {
          scaleY: withDelay(
            50,
            withTiming(value > 0 ? radius.value : 0, { duration: 300 })
          ),
        },
      ],
    };
  }, [value]);

  function onLayout(event: LayoutChangeEvent) {
    let layout = event.nativeEvent.layout;
    radius.value = Math.sqrt(layout.height ** 2 + layout.width ** 2) * 2;
  }

  return (
    <AnimView
      onLayout={onLayout}
      className="absolute bottom-0 right-0 h-full w-full"
    >
      <AnimView
        className="absolute bottom-0 right-0 rounded-full bg-[#FFC801]"
        style={ripple}
      />
    </AnimView>
  );
};
