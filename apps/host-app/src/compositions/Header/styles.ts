// React modules
import { StyleSheet } from 'react-native';

// Third party libraries
import { scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  headerContainer: {
    height: 'auto',
    backgroundColor: '#80AF46',
  },
  textInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  addressContainer: {
    paddingHorizontal: scale(20),
    marginBottom: verticalScale(20),
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  landersIcon: {
    left: scale(10),
    top: verticalScale(5),
  },
  cartIcon: {
    right: scale(15),
    top: verticalScale(3),
  },
  alignment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: scale(240),
    height: verticalScale(40),
    color: '#fff',
  },
});
