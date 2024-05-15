import { testProps } from '@superapp/test-ids';
import { AUTOMATION_ICON_ID } from '@superapp/test-ids/enums/HostApp';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const PinLocationIcon = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...testProps(AUTOMATION_ICON_ID.pinLocationIcon)}>
    <Path
      stroke="#40475A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 9c0 5.833-7.5 10.833-7.5 10.833S1 14.833 1 9a7.5 7.5 0 0 1 15 0Z"
    />
    <Path
      stroke="#40475A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.5 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
  </Svg>
);
export default PinLocationIcon;
