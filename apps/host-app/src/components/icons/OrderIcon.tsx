// React modules
import React from 'react';

// Third party libraries
import Svg, { Path, Rect } from 'react-native-svg';

const OrderIcon = () => (
  <Svg width="29" height="29" viewBox="0 0 29 29" fill="none">
    <Rect width="29" height="29" rx="14.5" fill="#2D9CDB" />
    <Path
      d="M18.7778 9.2H16.2233C15.9667 8.504 15.2944 8 14.5 8C13.7056 8 13.0333 8.504 12.7767 9.2H10.2222C9.55 9.2 9 9.74 9 10.4V18.8C9 19.46 9.55 20 10.2222 20H18.7778C19.45 20 20 19.46 20 18.8V10.4C20 9.74 19.45 9.2 18.7778 9.2ZM14.5 9.2C14.8361 9.2 15.1111 9.47 15.1111 9.8C15.1111 10.13 14.8361 10.4 14.5 10.4C14.1639 10.4 13.8889 10.13 13.8889 9.8C13.8889 9.47 14.1639 9.2 14.5 9.2ZM15.7222 17.6H11.4444V16.4H15.7222V17.6ZM17.5556 15.2H11.4444V14H17.5556V15.2ZM17.5556 12.8H11.4444V11.6H17.5556V12.8Z"
      fill="white"
    />
  </Svg>
);

export default OrderIcon;
