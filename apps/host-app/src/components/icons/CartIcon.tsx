// React modules

import { testProps } from '@superapp/test-ids';
import { AUTOMATION_ICON_ID } from '@superapp/test-ids/enums/HostApp';
import React from 'react';

// Third party libraries
import Svg, { Rect, G, Path, Defs, ClipPath } from 'react-native-svg';

const CartIcon = (props: {}): any => (
  <Svg
    width={40}
    height={40}
    fill="none"
    {...props}
    {...testProps(AUTOMATION_ICON_ID.cartIcon)}>
    <Rect width={39} height={39} y={2} fill="#73A833" rx={19.5} />
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M30 14.5H13.535l-.035-.293A2.5 2.5 0 0 0 11.018 12H10v1.667h1.018a.833.833 0 0 1 .828.736l1.32 11.223a2.5 2.5 0 0 0 2.482 2.207h11.019v-1.666H15.648a.834.834 0 0 1-.827-.737l-.11-.93h13.486L30 14.5Zm-3.197 8.333H14.516l-.784-6.666h14.274l-1.203 6.666ZM15.833 32a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.334ZM24.167 32a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.334Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M10 12h20v20H10z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CartIcon;
