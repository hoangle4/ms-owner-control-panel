import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
const Staff = (props) => {
	console.log(props.navigation);
	const list = [
		{
			title: 'Staff Hours',
			icon: 'add-alarm',
			subtitle: 'Adjusting staff work schedules and managing calendar availability'
		},
		{
			title: 'Staff Members',
			icon: 'people',
			subtitle: 'Add and remove staff members'
		},
		{
			title: 'Closed Dates',
			icon: 'schedule',
			subtitle: 'Shedule upcoming business closures or public holidays'
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
					leftIcon={{ name: item.icon, type: 'FontAwesome', iconStyle: { fontSize: 40 } }}
					bottomDivider
					chevron
					onPress={(e) => props.navigation.navigate('Setup')}
				/>
			))}
		</ScrollView>
	);
};

Staff.propTypes = {};
const styles = StyleSheet.create({
	subtitleView: {
		flexDirection: 'row',
		paddingTop: 5
	},

	ratingText: {
		color: 'grey'
	}
});
export default Staff;
