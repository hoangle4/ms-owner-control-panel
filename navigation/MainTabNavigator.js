import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AppointmentScreen from '../screens/Appointment';

import ClientsScreen from '../screens/ClientsScreen';
import SettingsScreen from '../screens/SettingsScreen';

import Home from '../screens/SettingsScreen/Home';
import Staff from '../screens/SettingsScreen/Staff';
import Services from '../screens/SettingsScreen/Services';
import Inventory from '../screens/SettingsScreen/Inventory';
import Analytics from '../screens/SettingsScreen/Analytics';
import Setup from '../screens/SettingsScreen/Setup';
import ContactSupport from '../screens/SettingsScreen/ContactSupport';
import HelpCenter from '../screens/SettingsScreen/HelpCenter';
// import Logout from '../screens/SettingsScreen/Home';

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

HomeStack.path = '';

const ClientsStack = createStackNavigator({
  Clients: ClientsScreen
});

ClientsStack.navigationOptions = {
  tabBarLabel: 'Clients',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-contacts'}
    />
  )
};

ClientsStack.path = '';

const AppointmentStack = createStackNavigator({
  Appointment: AppointmentScreen
});

AppointmentStack.navigationOptions = {
  tabBarLabel: 'Appointment',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'}
    />
  )
};

AppointmentStack.path = '';

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Home: {
    screen: Home,
    path: 'settings/home'
  },
  Staff: {
    screen: Staff,
    path: 'settings/staff'
  },
  Services: {
    screen: Services,
    path: 'settings/services'
  },
  Inventory: {
    screen: Inventory,
    path: 'settings/inventory'
  },
  Analytics: {
    screen: Analytics,
    path: 'settings/analytics'
  },
  Setup: {
    screen: Setup,
    path: 'settings/setup'
  },
  ContactSupport: {
    screen: ContactSupport,
    path: 'settings/contact-support'
  },
  HelpCenter: {
    screen: HelpCenter,
    path: 'settings/help-center'
  }
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  )
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ClientsStack,
  AppointmentStack,
  SettingsStack
});

tabNavigator.path = '';

export default tabNavigator;
