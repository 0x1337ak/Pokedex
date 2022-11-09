import clsx from 'clsx';
import * as React from 'react';
import { useState } from 'react';

import { View } from '@/ui';

import { HeaderCard } from './header-card';

export const Carousel = () => {
  const data = React.useMemo(() => [1, 2, 3, 4], []);
  const [activeCard, setActiveCard] = useState<number[]>([0, 1]);
  const [selected, SetSelected] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      SetSelected((prev) => (prev + 1) % data.length);
      setActiveCard([data[selected], data[(selected + 1) % data.length]]);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [data.length, data, activeCard, selected]);

  return (
    <View className="h-40 w-full flex-1 bg-green-400 p-2">
      <View className="m-1 flex h-32 flex-row overflow-hidden ">
        {data.map((item) => (
          <HeaderCard
            key={item}
            val={item}
            animationIndex={activeCard.indexOf(item)}
          />
        ))}
      </View>
      <View className="flex w-fit flex-row items-center justify-center  ">
        {data.map((val, index) => (
          <View
            key={val}
            className={clsx(
              'm-1 h-2 w-2 rounded-full',
              index == selected ? 'bg-yellow-500' : 'bg-gray-200'
            )}
          />
        ))}
      </View>
    </View>
  );
};
