// React modules

import { testProps } from '@superapp/test-ids';
import { AUTOMATION_ICON_ID } from '@superapp/test-ids/enums/HostApp';
import React from 'react';

// Third party libraries
import Svg, { Path } from 'react-native-svg';

const SearchIcon = (props: {}) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    {...props}
    {...testProps(AUTOMATION_ICON_ID.searchIcon)}>
    <Path
      fill="#fff"
      d="m15.317 14.455-2.578-2.52-.06-.093a.604.604 0 0 0-.853 0c-2.191 2.01-5.567 2.12-7.89.256-2.322-1.864-2.87-5.123-1.28-7.615 1.59-2.493 4.825-3.445 7.559-2.226 2.733 1.219 4.118 4.23 3.235 7.039a.584.584 0 0 0 .137.578c.148.156.369.222.58.174a.602.602 0 0 0 .445-.404c1.055-3.333-.539-6.918-3.75-8.438C7.651-.314 3.786.688 1.767 3.564-.252 6.44.18 10.327 2.787 12.71c2.605 2.383 6.6 2.547 9.401.386l2.283 2.232c.236.23.617.23.852 0a.588.588 0 0 0 0-.84l-.006-.033Z"
    />
  </Svg>
);
export default SearchIcon;
