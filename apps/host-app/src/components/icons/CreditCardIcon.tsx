import { testProps } from '@superapp/test-ids';
import { AUTOMATION_ICON_ID } from '@superapp/test-ids/enums/HostApp';
import React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const CreditCardIcon = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...testProps(AUTOMATION_ICON_ID.creditCardIcon)}>
    <G
      stroke="#40475A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)">
      <Path d="M19.25 3.667H2.75c-1.013 0-1.833.82-1.833 1.833v11c0 1.012.82 1.833 1.833 1.833h16.5c1.012 0 1.833-.82 1.833-1.833v-11c0-1.013-.82-1.833-1.833-1.833ZM.917 9.167h20.166" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CreditCardIcon;
