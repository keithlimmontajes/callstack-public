import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type TextInputTypes = {
  textStyle?: StyleProp<TextStyle>;
  label?: string;
  placeholder?: string;
  value?: string;
  secureTextEntry?: boolean;
  numeric?: Number;
  maxLength?: Number;
  placeholderTextColor?: string;
  multiline?: Number;
  inputStyle?: StyleProp<ViewStyle>;
  editable?: boolean;
  errors?: string;
  touched?: boolean;
  labelContainerStyle?: Object;
  onChangeText?: (e: any) => void;
};
