import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
const Setup = (props) => {
	const list = [
		{
			title: 'Account Settings',
			subtitle: 'Manage settings your business name, address, etc...'
		},
		{
			title: 'Locations',
			subtitle: 'Add and remove locations'
		},
		{
			title: 'Closed Dates',
			subtitle: 'Shedule upcoming business closures or public holidays'
		},
		{
			title: 'Online Booking',
			subtitle: 'Edit your online business profile'
		},
		{
			title: 'Marketing',
			subtitle: 'Boost your sales with our amazing marketing team'
		},
		{
			title: 'Client Messages',
			subtitle: 'Manage client messages and review messages'
		}
	];
	return (
		<ScrollView>
			{list.map((item, i) => (
				<ListItem
					subtitle={
						<View style={styles.subtitleView}>
							<Text style={styles.ratingText}>{item.subtitle}</Text>
						</View>
					}
					key={i}
					title={item.title}
					leftIcon={{
						name: item.icon,
						type: 'FontAwesome',
						iconStyle: { fontSize: 40 }
					}}
					bottomDivider
					chevron
					onPress={(e) => props.navigation.navigate('Setup')}
				/>
			))}
		</ScrollView>
	);
};

Setup.propTypes = {};
const styles = StyleSheet.create({
	subtitleView: {
		flexDirection: 'row',
		paddingTop: 5
	},

	ratingText: {
		color: 'grey'
	}
});
export default Setup;
