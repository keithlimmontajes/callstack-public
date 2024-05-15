/* eslint-disable react/no-unstable-nested-components */
/**
 * @readonly
 * Important note: Check the _README.md file
 */
import React from 'react';

import { focusedIcon, headerProps } from './styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeIcon from '../../components/Icons/HomeIcon';
import ActivitiesIcon from '../../components/Icons/ActivitiesIcon';
import RewardsIcon from '../../components/Icons/RewardsIcon';
import NotificationsIcon from '../../components/Icons/NotificationsIcon';
import UnderConstruction from '../../screens/UnderconstructionScreen';

import HomeStacks from '../StackNavigator/HomeStacks';

const Tab = createBottomTabNavigator();

const DashboardNavigations = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ ...headerProps() }}>
      <Tab.Screen
        name="Home"
        component={HomeStacks}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focusedIcon(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="Activities"
        component={UnderConstruction}
        options={{
          tabBarIcon: ({ focused }) => (
            <ActivitiesIcon color={focusedIcon(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={UnderConstruction}
        options={{
          tabBarIcon: () => <RewardsIcon />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={UnderConstruction}
        options={{
          tabBarIcon: ({ focused }) => (
            <NotificationsIcon color={focusedIcon(focused)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardNavigations;
