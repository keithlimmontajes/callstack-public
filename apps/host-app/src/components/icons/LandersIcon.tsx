// React modules

import { testProps } from '@superapp/test-ids';
import { AUTOMATION_ICON_ID } from '@superapp/test-ids/enums/HostApp';
import React from 'react';

// Third party libraries
import Svg, { Rect, Path } from 'react-native-svg';

const LandersIcon = (props: { iconWidth: number; iconHeight: number }) => (
  <Svg
    width={props.iconWidth}
    height={props.iconHeight}
    fill="none"
    {...testProps(AUTOMATION_ICON_ID.landersIcon)}
    {...props}>
    <Rect width={40} height={40} fill="#fff" rx={20} />
    <Path
      fill="#7D9956"
      d="M20.022 20.048a7.349 7.349 0 1 0 5.197 9.001 7.35 7.35 0 0 1-5.197-9Z"
    />
    <Path
      fill="#B2D465"
      d="M14.826 11.047a7.35 7.35 0 0 0-3.804 14.198 7.349 7.349 0 0 1 9-5.197 7.35 7.35 0 0 0-5.196-9Z"
    />
    <Path
      fill="#fff"
      d="M26.254 29.14a6.674 6.674 0 1 0 0-13.35 6.674 6.674 0 0 0 0 13.35Z"
    />
    <Path
      fill="#67883B"
      d="M29.024 14.851a7.35 7.35 0 0 1-9.001 5.197 7.349 7.349 0 1 0 9-5.197Z"
    />
    <Path
      fill="#80AF45"
      d="M23.827 5.85a7.35 7.35 0 0 0-9 5.197 7.348 7.348 0 0 1 5.196 9.001A7.35 7.35 0 1 0 23.827 5.85Z"
    />
  </Svg>
);

export default LandersIcon;
