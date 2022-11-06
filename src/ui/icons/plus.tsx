import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import { Path } from 'react-native-svg';
import Svg from 'react-native-svg';

export const Plus = ({ color = '#000', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 448  512" fill="none" {...props}>
    <Path
      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
      fill={color}
    />
  </Svg>
);
