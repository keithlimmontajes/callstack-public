/**
 *
 * @format
 */

// React modules
import React from 'react';
import { Text as RNText } from 'react-native';

// Types
import { PropsType } from './types';

// Styles
import { moderateScale } from 'react-native-size-matters';

const Text = (props: PropsType) => {
  const {
    color,
    children,
    customStyle,
    size,
    weight,
    numberOfLines,
    ellipsizeMode,
  } = props;
  return (
    <RNText
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[
        {
          color: color || '#000',
          fontSize: size ? moderateScale(size) : 14,
          fontWeight: weight || '400',
          textDecorationLine: customStyle?.textDecorationLine || 'none',
          textAlign: customStyle?.textAlign || 'auto',
        },
        customStyle,
      ]}>
      {children}
    </RNText>
  );
};

export default Text;
