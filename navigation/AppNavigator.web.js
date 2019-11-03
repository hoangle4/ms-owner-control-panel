import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import LoginScreen from '../screens/auth/LoginScreen';
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';

const AuthStack = createStackNavigator({
  Auth: LoginScreen
});
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
// switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
