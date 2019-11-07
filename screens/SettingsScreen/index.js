import React from 'react';
import { ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native';
export default function SettingsScreen(props) {
	const list = [
		{
			title: 'Home',
			icon: 'home'
		},
		{
			title: 'Staff',
			icon: 'people'
		},
		{
			title: 'Services',
			icon: 'book'
		},
		{
			title: 'Inventory',
			icon: 'assessment'
		},
		{
			title: 'Analytics',
			icon: 'pie_chart'
		},
		{
			title: 'Setup',
			icon: 'perm_data_set'
		},
		{
			title: 'Contact Support',
			icon: 'contact_support'
		},
		{
			title: 'Help Center',
			icon: 'question_answer'
		},
		{
			title: 'Logout',
			icon: 'keyboard_return'
		}
	];
	console.log(props);
	return (
		<ScrollView>
			{list.map((item, i) => (
				<ListItem
					key={i}
					title={item.title}
					leftIcon={{ name: item.icon }}
					bottomDivider
					chevron
					onPress={(e) => props.navigation.navigate(item.title.split(' ').join(''))}
				/>
			))}
		</ScrollView>
	);
}

SettingsScreen.navigationOptions = {
	title: 'Setting'
};
