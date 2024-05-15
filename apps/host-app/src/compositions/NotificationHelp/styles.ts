import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(27),
    marginBottom: verticalScale(35),
  },
  subcontainer: {
    borderWidth: 1,
    borderColor: '#80AF46',
    borderRadius: 10,
    backgroundColor: '#80AF46',

    padding: moderateScale(20),
    height: verticalScale(85),
  },
  text: {
    color: '#fff',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icons: {
    justifyContent: 'center',
  },
  subcontent: {
    flexDirection: 'row',
  },
});
