// React modules

import { testProps } from '@superapp/test-ids';
import { AUTOMATION_ICON_ID } from '@superapp/test-ids/enums/HostApp';
import React from 'react';

// Third party libraries
import Svg, { Path } from 'react-native-svg';

const NotificationsIcon = (props: { color: string }) => (
  <Svg
    width={25}
    height={30}
    fill="none"
    {...testProps(AUTOMATION_ICON_ID.notificationsIcon)}>
    <Path
      fill={props.color}
      stroke="#B0B0B0"
      strokeWidth={0.2}
      d="m12.731.995.042-.085c.264.124.446.297.558.515.11.216.148.469.14.748-.019.545-.015 1.09-.01 1.636l.003.624.366.078c.317.066.631.132.937.222a8.146 8.146 0 0 1 5.823 7.159c.076.961.068 1.932.06 2.896-.003.35-.006.698-.005 1.045.005 1.87.563 3.538 1.734 4.98.237.293.507.556.781.824.095.092.19.185.285.28.646.648.845 1.603.458 2.425-.19.403-.449.716-.775.929-.326.213-.715.322-1.156.326a358.7 358.7 0 0 1-3.487.005L17.04 25.6H16.81l-.005.02c-.018.07-.036.139-.057.205M12.731.995 1.01 23.615l-.1.009c.102 1.16.988 1.97 2.14 1.974 1.662.006 3.324.004 4.986-.001.08 0 .113.01.13.023.018.012.04.04.064.125.47 1.66 1.534 2.738 3.173 3.213.14.04.284.071.425.101l.18.04.011.002h.999l.016-.006.075-.03a.308.308 0 0 1 .056-.018c.911-.173 1.667-.53 2.266-1.07.598-.541 1.036-1.261 1.317-2.152M12.731.995V.9h-.45l-.017.006c-.262.103-.453.254-.574.458-.12.203-.166.447-.156.726.018.495.014.989.01 1.486-.002.214-.004.428-.004.643v.234c-.87.12-1.69.328-2.456.714-2.807 1.415-4.427 3.7-4.692 6.883-.078.94-.066 1.889-.054 2.832.004.307.008.614.009.92.003 1.294-.267 2.515-.852 3.664a7.657 7.657 0 0 1-1.803 2.313L12.732.995Zm4.017 24.83-.095-.03.095.03Zm-5.317 3.037c.136.04.275.069.413.098l.186.04H13l.046-.017c.033-.014.066-.027.1-.034l-1.715-.087Zm0 0c-1.606-.466-2.644-1.516-3.104-3.144l3.104 3.144Zm10.404-5.22a.464.464 0 0 0 .32-.144c.019-.027.023-.046.023-.06a.111.111 0 0 0-.019-.055c-.029-.05-.082-.098-.145-.156l-.006-.006.067-.074-.24.495Zm0 0c-2.637.009-5.275.008-7.912.008h-1.338v-.001H3.269a.872.872 0 0 0-.085.004l-.044.004a.188.188 0 0 1-.075-.007 1.088 1.088 0 0 1-.146-.068.265.265 0 0 1-.047-.034c-.011-.01-.013-.016-.012-.015a.238.238 0 0 1 .005-.118.347.347 0 0 1 .058-.125c.055-.07.122-.133.196-.198l.051-.044c.058-.051.12-.104.176-.16m18.49.754L11.29 6.365l.018.098c-2.68.494-4.836 2.905-5 5.665-.053.905-.048 1.812-.043 2.722.002.32.003.64.002.961-.007 2.77-.978 5.131-2.922 7.076m0 0-.07-.07.07.07Zm11.42 2.725c-.08.341-.345.695-.717.98-.41.315-.933.533-1.428.554a2.634 2.634 0 0 1-1.564-.47c-.41-.281-.716-.66-.83-1.064h4.538Z"
    />
  </Svg>
);
export default NotificationsIcon;
