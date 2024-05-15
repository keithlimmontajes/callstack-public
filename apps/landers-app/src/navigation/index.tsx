import React from 'react';

import { styles } from './styles';
import { MainStackParamList } from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const LandersMainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LandersHome"
      screenOptions={{
        headerTitle: 'Landers',
        headerStyle: styles.header,
        headerBackTitleVisible: false,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: 'rgba(255,255,255,1)',
      }}>
      <Stack.Screen name="LandersHome" component={HomeScreen} />
      <Stack.Screen name="LandersDetails" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default LandersMainNavigator;
