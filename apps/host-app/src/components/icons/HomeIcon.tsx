// React modules

import { testProps } from '@superapp/test-ids';
import { AUTOMATION_ICON_ID } from '@superapp/test-ids/enums/HostApp';
import React from 'react';

// Third party libraries
import Svg, { Path } from 'react-native-svg';

const HomeIcon = (props: { color: string }) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    {...testProps(AUTOMATION_ICON_ID.homeIcon)}>
    <Path
      fill={props.color}
      d="M10.988 21.998c-2.363 0-4.727.005-7.09-.002C1.912 21.99.365 20.66.039 18.689a3.974 3.974 0 0 1-.037-.647C0 14.997.002 11.951 0 8.908c-.001-1.444.598-2.562 1.779-3.374C4.084 3.949 6.386 2.36 8.689.774 10.175-.251 11.808-.26 13.286.757c2.319 1.594 4.637 3.19 6.953 4.789 1.162.801 1.758 1.91 1.758 3.333.002 3.063.006 6.124 0 9.187-.006 2.007-1.317 3.558-3.277 3.89-.235.04-.48.04-.72.04-2.336.003-4.675.002-7.012.002Zm.003-3.867c.858 0 1.717.001 2.575-.002.11 0 .225-.005.33-.032a.533.533 0 0 0 .402-.535.53.53 0 0 0-.397-.513 1.322 1.322 0 0 0-.33-.033c-1.718-.002-3.434-.002-5.151 0-.12 0-.244.005-.355.043a.507.507 0 0 0-.362.512c0 .25.125.432.358.514.11.039.236.044.355.044.858.004 1.717.002 2.575.002Z"
    />
  </Svg>
);
export default HomeIcon;
