// React modules
import React from 'react';
import { testProps } from '@superapp/test-ids';
import { AUTOMATION_ICON_ID } from '@superapp/test-ids/enums/HostApp';

// Third party libraries
import Svg, { Path } from 'react-native-svg';

const PinIcon = () => (
  <Svg
    width={11}
    height={14}
    fill="none"
    {...testProps(AUTOMATION_ICON_ID.pinIcon)}>
    <Path
      fill="#fff"
      d="M11 5.427c-.026 1.523-.462 2.761-1.347 3.837-1.218 1.482-2.439 2.962-3.658 4.444-.322.39-.668.39-.99-.003-1.269-1.542-2.563-3.065-3.8-4.632C-.58 6.81-.352 3.462 1.691 1.511 2.887.369 4.328-.094 5.973.016c2.17.144 4.457 1.719 4.943 4.591.053.314.066.635.084.82Zm-3.343-.04a2.158 2.158 0 1 0-4.313-.006 2.158 2.158 0 0 0 2.153 2.154 2.162 2.162 0 0 0 2.16-2.147Z"
    />
  </Svg>
);
export default PinIcon;
