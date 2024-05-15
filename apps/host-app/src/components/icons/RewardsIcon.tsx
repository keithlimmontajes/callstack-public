// React modules

import { testProps } from '@superapp/test-ids';
import { AUTOMATION_ICON_ID } from '@superapp/test-ids/enums/HostApp';
import React from 'react';

// Third party libraries
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const RewardsIcon = () => (
  <Svg
    width={32}
    height={32}
    fill="none"
    {...testProps(AUTOMATION_ICON_ID.rewardsIcon)}>
    <Rect
      width={29.057}
      height={29.057}
      x={1.414}
      y={30.471}
      fill="url(#a)"
      rx={14.528}
      transform="rotate(-90 1.414 30.471)"
    />
    <Rect
      width={23.819}
      height={23.819}
      x={10.74}
      fill="url(#b)"
      rx={11.909}
      transform="rotate(26.8 10.74 0)"
    />
    <Rect
      width={21.081}
      height={21.081}
      x={5.402}
      y={5.402}
      fill="#fff"
      rx={10.54}
    />
    <Path
      fill="#7D9956"
      d="M15.955 15.968a3.873 3.873 0 1 0 2.739 4.743 3.873 3.873 0 0 1-2.74-4.743Z"
    />
    <Path
      fill="#B2D465"
      d="M13.216 11.224a3.873 3.873 0 0 0-2.005 7.482 3.873 3.873 0 0 1 4.744-2.738 3.874 3.874 0 0 0-2.739-4.744Z"
    />
    <Path
      fill="#fff"
      d="M19.239 20.759a3.517 3.517 0 1 0 0-7.035 3.517 3.517 0 0 0 0 7.035Z"
    />
    <Path
      fill="#67883B"
      d="M20.698 13.229a3.873 3.873 0 0 1-4.743 2.739 3.873 3.873 0 1 0 4.743-2.739Z"
    />
    <Path
      fill="#80AF45"
      d="M17.96 8.485a3.873 3.873 0 0 0-4.744 2.74 3.872 3.872 0 0 1 2.739 4.743 3.873 3.873 0 1 0 2.005-7.483Z"
    />
    <Rect
      width={21.081}
      height={21.081}
      x={5.402}
      y={5.402}
      fill="url(#c)"
      rx={10.54}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={28.82}
        x2={-1.617}
        y1={56.169}
        y2={49.513}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#EEB012" />
        <Stop offset={1} stopColor="#FFE6A7" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={33.205}
        x2={8.255}
        y1={21.065}
        y2={15.609}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#EEB219" />
        <Stop offset={1} stopColor="#FD8" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={1.361}
        x2={28.59}
        y1={33.158}
        y2={0.132}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={0.735} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default RewardsIcon;
