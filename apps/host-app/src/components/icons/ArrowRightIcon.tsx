// React modules

import { testProps } from '@superapp/test-ids';
import { AUTOMATION_ICON_ID } from '@superapp/test-ids/enums/HostApp';
import React from 'react';

// Third party libraries
import Svg, { Path } from 'react-native-svg';

const ArrowRightIcon = (props: {}) => (
  <Svg
    width={14}
    height={16}
    fill="none"
    {...props}
    {...testProps(AUTOMATION_ICON_ID.arrowRightIcon)}>
    <Path
      fill="#fff"
      d="M1 7a1 1 0 0 0 0 2V7Zm12.707 1.707a1 1 0 0 0 0-1.414L7.343.929A1 1 0 0 0 5.93 2.343L11.586 8l-5.657 5.657a1 1 0 1 0 1.414 1.414l6.364-6.364ZM1 9h12V7H1v2Z"
    />
  </Svg>
);

export default ArrowRightIcon;
