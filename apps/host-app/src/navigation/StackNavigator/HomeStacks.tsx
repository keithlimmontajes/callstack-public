import React from 'react';

import { MainStackParamList } from '../MainNavigator/types';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/HomeScreen';
import UnderConstruction from '../../screens/UnderconstructionScreen';
import { homeHeaderProps } from './styles';

const SubStack = createStackNavigator<MainStackParamList>();

const HomeStacks = () => {
  return (
    <SubStack.Navigator
      initialRouteName="HomeStack"
      screenOptions={homeHeaderProps}>
      <SubStack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{ ...homeHeaderProps }}
      />
      <SubStack.Screen name="HomeDetails" component={UnderConstruction} />
      <SubStack.Screen name="Membership" component={UnderConstruction} />
    </SubStack.Navigator>
  );
};

export default HomeStacks;
