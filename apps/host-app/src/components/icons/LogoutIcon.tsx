import { testProps } from '@superapp/test-ids';
import { AUTOMATION_ICON_ID } from '@superapp/test-ids/enums/HostApp';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const LogoutIcon = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...testProps(AUTOMATION_ICON_ID.logoutIcon)}>
    <Path
      stroke="#40475A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 19H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h4M14 15l5-5-5-5M19 10H7"
    />
  </Svg>
);
export default LogoutIcon;
