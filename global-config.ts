/**
 * GLOBAL ENVIRONMENTS
 */

import { Platform } from 'react-native';

export const localURL = 'http://localhost:5000';
export const stagingURL = 'http://localhost:5000';
export const prodURL = 'http://localhost:5000';

export const isDev = false;
export const isStaging = true;
export const isProd = false;

export const getContainers = () => {
  if (isDev) {
    return {
      Landers: 'http://localhost:9001/[name][ext]',
      // Account: "http://localhost:9002/[name][ext]",
      // Activities: "http://localhost:9003/[name][ext]",
      // Authentication: "http://localhost:9004/[name][ext]",
      // Cart: "http://localhost:9005/[name][ext]",
      // Notifications: "http://localhost:9006/[name][ext]",
      // Payment: "http://localhost:9007/[name][ext]",
      // Reviews: "http://localhost:9008/[name][ext]",
    };
  } else if (isStaging) {
    return {
      Landers: `${stagingURL}/mini-app/landers?platform=${Platform.OS}&version=0.0.1&file=[name][ext]`,
      // Account: `${stagingURL}?app=account&platform=${Platform.OS}&file=[name][ext]`,
      // Activities: `${stagingURL}?app=activities&platform=${Platform.OS}&file=[name][ext]`,
      // Authentication: `${stagingURL}?app=authentication&platform=${Platform.OS}&file=[name][ext]`,
      // Cart: `${stagingURL}?app=cart&platform=${Platform.OS}&file=[name][ext]`,
      // Notifications: `${stagingURL}?app=notifications&platform=${Platform.OS}&file=[name][ext]`,
      // Payment: `${stagingURL}?app=payment&platform=${Platform.OS}&file=[name][ext]`,
      // Reviews: `${stagingURL}?app=reviews&platform=${Platform.OS}&file=[name][ext]`,
    };
  } else {
    return {};
  }
};
