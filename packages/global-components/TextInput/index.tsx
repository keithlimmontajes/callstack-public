// React modules
import React from 'react';
import { View, TextInput as RNTextInput, StyleSheet } from 'react-native';

import { color } from '../../../apps/host-app/src/utils/themes';
// Third party libraries
import { scale, verticalScale } from 'react-native-size-matters';

// Components
import Text from '../Text';
import { TextInputTypes } from './types';

const TextInput = (props: TextInputTypes) => {
  const {
    textStyle,
    label,
    placeholder,
    value,
    secureTextEntry,
    numeric,
    maxLength,
    placeholderTextColor,
    multiline,
    inputStyle,
    editable,
    errors = '',
    touched,
    labelContainerStyle,
    onChangeText,
  } = props;
  return (
    <View style={styles.container}>
      <View style={[styles.labelContainer, labelContainerStyle]}>
        <Text size={14} customStyle={textStyle} color="#fff">
          {label}
        </Text>
      </View>
      {/** @ts-expect-error */}
      <RNTextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={numeric ? 'numeric' : 'default'}
        maxLength={maxLength}
        placeholderTextColor={placeholderTextColor}
        multiline={multiline}
        style={[
          styles.textInput,
          inputStyle,
          { borderColor: errors && touched ? '#EC543C' : '#dfdfdf' },
        ]}
        numberOfLines={4}
        editable={editable}
        autoCapitalize="none"
      />
      {touched && errors && <Text color="#EC543C">{errors}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    height: verticalScale(45),
    marginVertical: verticalScale(3),
    paddingHorizontal: scale(15),
    width: '100%',
    borderRadius: 50,
    color: '#000',
    backgroundColor: '#73A832',
    justifyContent: 'center',
  },
  error: {
    marginVertical: verticalScale(3),
    width: '100%',
    color: color.RED,
    justifyContent: 'center',
  },
});

export default TextInput;
