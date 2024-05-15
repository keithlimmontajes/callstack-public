import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CloseIcon = () => (
  <Svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
  >
    <Path
      d='M18 6L6 18'
      stroke='#40475A'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M6 6L18 18'
      stroke='#40475A'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
export default CloseIcon
