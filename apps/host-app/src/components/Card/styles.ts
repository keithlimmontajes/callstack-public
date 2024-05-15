import { StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D9D9D9',
    marginTop: verticalScale(10),
  },
});
