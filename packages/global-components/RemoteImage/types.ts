/**
 *
 * @format
 */

import { FasterImageProps } from '@candlefinance/faster-image';
import { ImageStyle } from 'react-native';

export type PropsType = Omit<FasterImageProps, 'style'> & {
  testId?: string;
  height?: number;
  width?: number;
  customStyle?: Object;
  style?: ImageStyle;
};
