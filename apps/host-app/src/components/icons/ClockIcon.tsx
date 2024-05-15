import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ClockIcon = () => (
  <Svg width={14} height={14} fill='none'>
    <Path
      stroke='#80AF46'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.4}
      d='M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z'
    />
    <Path
      stroke='#80AF46'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.4}
      d='M7 3.4V7l2.4 1.2'
    />
  </Svg>
)
export default ClockIcon
