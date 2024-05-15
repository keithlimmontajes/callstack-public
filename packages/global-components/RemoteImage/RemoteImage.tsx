import React from 'react';

import { FasterImageView } from '@candlefinance/faster-image';
import { scale, verticalScale } from 'react-native-size-matters';

import { PropsType } from './types';

const RemoteImage = (props: PropsType) => {
  const { height, width, source, style } = props;
  return (
    <FasterImageView
      source={source}
      style={{
        height: height ? verticalScale(height) : '100%',
        width: width ? scale(width) : '100%',
        ...style,
      }}
    />
  );
};

export default RemoteImage;
