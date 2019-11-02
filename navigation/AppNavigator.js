import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';

import { Platform } from 'react-native';

import MainTabNavigator from './MainTabNavigator';

import LoginScreen from '../screens/auth/LoginScreen';
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';

const config = Platform.select({
  headerMode: 'screen'
});

const AuthStack = createStackNavigator(
  {
    Auth: LoginScreen
  },
  config
);
export default createAppContainer(
  createSwitchNavigator(
    { AuthLoading: AuthLoadingScreen, Auth: AuthStack, Main: MainTabNavigator },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
