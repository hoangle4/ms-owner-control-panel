import React from 'react';
import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import { Platform } from 'react-native';
import LoginScreen from '../screens/auth/LoginScreen';
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';
const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
});

const AuthStack = createStackNavigator(
  {
    Auth: LoginScreen
  },
  config
);
const switchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    Main: MainTabNavigator
  },
  {
    initialRouteName: 'AuthLoading'
  }
);
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
