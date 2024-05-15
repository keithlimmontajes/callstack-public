// React modules
import { StyleSheet } from 'react-native';

// Third party libraries
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  clickableContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(10),
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ECEDEF',
  },
});
