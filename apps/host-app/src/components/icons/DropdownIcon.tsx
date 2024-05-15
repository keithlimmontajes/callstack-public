// React modules

import { testProps } from '@superapp/test-ids';
import { AUTOMATION_ICON_ID } from '@superapp/test-ids/enums/HostApp';
import React from 'react';

// Third party libraries
import Svg, { Path } from 'react-native-svg';

const DropdownIcon = (props: {}) => (
  <Svg
    width={8}
    height={5}
    fill="none"
    {...props}
    {...testProps(AUTOMATION_ICON_ID.dropdownIcon)}>
    <Path
      fill="#fff"
      d="M3.563 4.656h-.024c.047.047.117.07.211.07.07 0 .14-.023.21-.07l3.47-3.445a.266.266 0 0 0 .07-.188c0-.07-.023-.14-.07-.21l-.47-.47a.378.378 0 0 0-.21-.07c-.094 0-.14.024-.188.07L3.75 3.134.937.343A.266.266 0 0 0 .75.274c-.094 0-.164.024-.21.07l-.47.47a.378.378 0 0 0-.07.21c0 .07.023.141.094.188l3.469 3.445Z"
    />
  </Svg>
);

export default DropdownIcon;
