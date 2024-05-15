import { testProps } from '@superapp/test-ids';
import { AUTOMATION_ICON_ID } from '@superapp/test-ids/enums/HostApp';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronIcon = () => (
  <Svg
    width={10}
    height={24}
    fill="none"
    {...testProps(AUTOMATION_ICON_ID.chevronIcon)}>
    <Path
      fill="#333"
      d="M.781.688c.063-.063.125-.094.25-.094.094 0 .188.031.282.094l6.53 6.562c.063.063.126.156.126.25 0 .125-.063.188-.125.25l-6.532 6.563a.504.504 0 0 1-.28.093c-.126 0-.188-.031-.25-.094l-.626-.624c-.093-.063-.125-.126-.125-.25 0-.094.032-.188.125-.282L5.813 7.5.155 1.844C.063 1.78.031 1.687.031 1.562c0-.093.032-.187.125-.25L.781.688Z"
    />
  </Svg>
);
export default ChevronIcon;
