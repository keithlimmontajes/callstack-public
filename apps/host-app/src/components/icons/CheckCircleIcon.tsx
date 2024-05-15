import { testProps } from '@superapp/test-ids';
import { AUTOMATION_ICON_ID } from '@superapp/test-ids/enums/HostApp';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const CheckCircleIcon = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...testProps(AUTOMATION_ICON_ID.checkCircleIcon)}>
    <Path
      stroke="#40475A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
    />
    <Path
      stroke="#40475A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 4 12 14.01l-3-3"
    />
  </Svg>
);
export default CheckCircleIcon;
