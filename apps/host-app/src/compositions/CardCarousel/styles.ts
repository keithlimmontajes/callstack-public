// React modules
import { Platform, StyleSheet } from 'react-native';

// Third party libraries
import { verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    height: verticalScale(180),
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }),
  },
  activeIndexText: {
    marginTop: 20,
    fontSize: 18,
  },
});
