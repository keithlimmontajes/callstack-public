/**
 *
 * @format
 */

// React modules
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

// Third party libraries
import { scale, verticalScale } from 'react-native-size-matters';

// Types
import { PropsType } from './types';

// Components
import Text from '../Text';
import Image from '../Image';

const Button = (props: PropsType) => {
  const {
    activeOpacity,
    onPress,
    disabled = false,
    title,
    type,
    hasIcon = false,
    source,
    textColor,
    style,
  } = props;

  let color = 'transparent';

  if (type === 'primary' && !disabled) {
    color = 'rgba(131, 177, 81, 1)';
  } else if (type === 'primary' && disabled) {
    color = '#D1D1D1';
  } else if (type === 'primary') {
    color = '#EC543C';
  }

  const renderButton = () => {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: color,
            ...style,
          },
        ]}>
        {hasIcon && <Image source={source} height={18} width={18} />}
        <Text
          color={textColor || '#ffffff'}
          customStyle={{ left: scale(hasIcon ? 5 : 0) }}
          children={{}}>
          {title}
        </Text>
      </View>
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      disabled={disabled}>
      {renderButton()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(40),
    width: scale(290),
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },
});

export default Button;
