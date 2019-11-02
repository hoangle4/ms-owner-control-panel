import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ClientsScreen from '../screens/ClientsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
	web: { headerMode: 'screen' },
	default: {}
});

const HomeStack = createStackNavigator(
	{
		Home: HomeScreen
	},
	config
);

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'
			}
		/>
	)
};

HomeStack.path = '';

const ClientsStack = createStackNavigator(
	{
		Clients: ClientsScreen
	},
	config
);

ClientsStack.navigationOptions = {
	tabBarLabel: 'Clients',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-contacts'} />
	)
};

ClientsStack.path = '';

const SettingsStack = createStackNavigator(
	{
		Settings: SettingsScreen
	},
	config
);

SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
	)
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
	HomeStack,
	ClientsStack,
	SettingsStack
});

tabNavigator.path = '';

export default tabNavigator;
