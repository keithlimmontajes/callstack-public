/**
 *
 * @format
 */

import { ReactNode } from 'react';

export type PropsType = {
  testId?: string;
  color?: string;
  children?: ReactNode;
  customStyle?: any;
  size?: Number;
  weight?: Number;
  numberOfLines?: Number;
  ellipsizeMode?: string;
};
