import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import LoginScreen from '../screens/auth/LoginScreen';
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';

const AuthStack = createStackNavigator({
  Auth: LoginScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      Main: MainTabNavigator
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
