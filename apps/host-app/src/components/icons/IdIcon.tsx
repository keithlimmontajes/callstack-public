import { testProps } from '@superapp/test-ids';
import { AUTOMATION_ICON_ID } from '@superapp/test-ids/enums/HostApp';
import React from 'react';
import Svg, { G, Path, Mask, Defs, ClipPath } from 'react-native-svg';

const IdIcon = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...testProps(AUTOMATION_ICON_ID.idIcon)}>
    <G clipPath="url(#a)">
      <Path
        stroke="#40475A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.25 3.833H2.75c-1.013 0-1.833.858-1.833 1.917v11.5c0 1.059.82 1.917 1.833 1.917h16.5c1.012 0 1.833-.858 1.833-1.917V5.75c0-1.059-.82-1.917-1.833-1.917ZM13 9.41h4M13 13.59h2"
      />
      <Mask id="b" fill="#fff">
        <Path d="M10 15.682v-1.046c0-.554-.158-1.086-.44-1.478-.28-.392-.662-.613-1.06-.613h-3c-.398 0-.78.22-1.06.613-.282.392-.44.924-.44 1.478v1.046" />
      </Mask>
      <Path
        fill="#40475A"
        d="M10 15.682v-1.046c0-.554-.158-1.086-.44-1.478-.28-.392-.662-.613-1.06-.613h-3c-.398 0-.78.22-1.06.613-.282.392-.44.924-.44 1.478v1.046"
      />
      <Path
        fill="#40475A"
        d="M9 15.682a1 1 0 1 0 2 0H9Zm-.5-3.137v-1 1Zm-3 0v-1 1ZM4 14.636H3h1Zm-1 1.046a1 1 0 1 0 2 0H3Zm8 0v-1.046H9v1.046h2Zm0-1.046c0-.731-.206-1.474-.627-2.061L8.748 13.74c.142.197.252.518.252.895h2Zm-.627-2.061c-.424-.591-1.083-1.03-1.873-1.03v2c.005 0 .11.002.248.196l1.625-1.166ZM8.5 11.545h-3v2h3v-2Zm-3 0c-.79 0-1.45.439-1.873 1.03l1.625 1.166c.139-.194.243-.196.248-.196v-2Zm-1.873 1.03c-.421.587-.627 1.33-.627 2.061h2c0-.377.11-.698.252-.895l-1.625-1.166ZM3 14.636v1.046h2v-1.046H3Z"
        mask="url(#b)"
      />
      <Path
        fill="#40475A"
        stroke="#40475A"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.042 11.5c.759 0 1.374-.702 1.374-1.568 0-.866-.615-1.568-1.375-1.568-.759 0-1.375.702-1.375 1.568 0 .866.616 1.568 1.375 1.568Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v23H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default IdIcon;
