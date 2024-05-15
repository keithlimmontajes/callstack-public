import { testProps } from '@superapp/test-ids';
import { AUTOMATION_ICON_ID } from '@superapp/test-ids/enums/HostApp';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const EditIcon = (props: { color?: string }) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    style={{ margin: 0, padding: 10 }}
    {...testProps(AUTOMATION_ICON_ID.editIcon)}>
    <Path
      stroke={props.color || '#80AF46'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M6.144 1.962h-4A1.143 1.143 0 0 0 1 3.105v8.002a1.143 1.143 0 0 0 1.143 1.143h8.002a1.143 1.143 0 0 0 1.143-1.143v-4"
    />
    <Path
      stroke={props.color || '#80AF46'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M10.43 1.105a1.212 1.212 0 1 1 1.715 1.715l-5.43 5.43-2.286.57.572-2.285 5.43-5.43Z"
    />
  </Svg>
);
export default EditIcon;
