// React modules
import React from 'react';

// Third party libraries
import Svg, { Path, Rect } from 'react-native-svg';

const StockIcon = () => (
  <Svg width="29" height="30" viewBox="0 0 29 30" fill="none">
    <Rect width="29" height="29.2274" rx="14.5" fill="#B2D566" />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.59091 13.1365C8.41168 13.1365 8.24213 13.2178 8.12998 13.3576C8.01783 13.4974 7.9752 13.6806 8.01408 13.8556L9.32721 19.7647C9.38729 20.035 9.62709 20.2274 9.90404 20.2274H19.096C19.3729 20.2274 19.6127 20.035 19.6728 19.7647L20.9859 13.8556C21.0248 13.6806 20.9822 13.4974 20.87 13.3576C20.7579 13.2178 20.5883 13.1365 20.4091 13.1365H8.59091Z"
      fill="white"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.5009 9C14.6734 9 14.8373 9.07538 14.9496 9.20635L18.495 13.3427L17.5977 14.1118L14.5009 10.4989L11.4041 14.1118L10.5068 13.3427L14.0523 9.20635C14.1645 9.07538 14.3284 9 14.5009 9Z"
      fill="white"
    />
  </Svg>
);

export default StockIcon;
