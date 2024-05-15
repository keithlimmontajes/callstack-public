// React modules
import { StyleSheet } from 'react-native';

// Third party libraries
import { scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#fff',
    borderRadius: scale(10),
    borderColor: '#D9D9D9',
    borderWidth: 1,

    height: verticalScale(35),
  },
});
