/**
 * @readonly
 * Important note: Check the _README.md file
 */
import React from 'react';

import { optionsProps } from './styles';
import { MainStackParamList } from './types';
import { UnderConstruction } from '@global/components';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from '../TabNavigator';
import LandersScreen from '../../screens/LandersScreen';

const Stack = createStackNavigator<MainStackParamList>();
// LogBox.ignoreAllLogs();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Host">
      <Stack.Screen
        name="Host"
        options={optionsProps}
        component={TabNavigator}
      />
      <Stack.Screen name="Landers" component={LandersScreen} />
      <Stack.Screen name="Onboarding" component={UnderConstruction} />
      <Stack.Screen name="UnderConstruction" component={UnderConstruction} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
