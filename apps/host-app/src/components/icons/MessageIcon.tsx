import { testProps } from '@superapp/test-ids';
import { AUTOMATION_ICON_ID } from '@superapp/test-ids/enums/HostApp';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MessageIcon = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...testProps(AUTOMATION_ICON_ID.messageIcon)}>
    <Path
      stroke="#40475A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.379 8.379 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
    />
  </Svg>
);
export default MessageIcon;
