import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {},
});

export const focusedIcon = (focused: boolean) => {
  return focused ? '#80AF46' : '#B0B0B0';
};

// TODO should edit types any
export const headerProps: any = () => {
  return {
    headerShown: false,
    tabBarStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderTopWidth: 0,
      backgroundColor: '#D8DCDD',
    },
    tabBarActiveTintColor: '#80AF46',
    tabBarLabelStyle: { fontWeight: 700 },
  };
};
