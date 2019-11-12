import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { calcWidth } from '../../utils/DeviceDimensions';
const Services = (props) => {
	const list = [
		{
			title: 'Pedicure',
			icon: 'bars',
			subtitle: 'Adjusting staff work schedules and managing calendar availability'
		},
		{
			title: 'Manicure',
			icon: 'bars',
			subtitle: 'Add and remove staff members'
		},
		{
			title: 'Acrylic Nails',
			icon: 'bars',
			subtitle: 'Shedule upcoming business closures or public holidays'
		},
		{
			title: 'Pedicure',
			icon: 'bars',
			subtitle: 'Adjusting staff work schedules and managing calendar availability'
		},
		{
			title: 'Manicure',
			icon: 'bars',
			subtitle: 'Add and remove staff members'
		},
		{
			title: 'Acrylic Nails',
			icon: 'bars',
			subtitle: 'Shedule upcoming business closures or public holidays'
		},
		{
			title: 'Pedicure',
			icon: 'bars',
			subtitle: 'Adjusting staff work schedules and managing calendar availability'
		},
		{
			title: 'Manicure',
			icon: 'bars',
			subtitle: 'Add and remove staff members'
		},
		{
			title: 'Acrylic Nails',
			icon: 'bars',
			subtitle: 'Shedule upcoming business closures or public holidays'
		}
	];
	return (
		<View>
			<View style={StyleSheet.btnContainer}>
				<Button icon={<Icon name="plus" size={15} color="white" />} iconLeft title=" Add Service" />
			</View>
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
						leftIcon={<Icon name="bars" size={20} color="rgba(0,0,0,0.54)" title=" Add Service" />}
						bottomDivider
						chevron
						onPress={(e) => props.navigation.navigate('Setup')}
					/>
				))}
			</ScrollView>
		</View>
	);
};

Services.propTypes = {};
const styles = StyleSheet.create({
	btnContainer: {
		width: calcWidth(3)
	},
	subtitleView: {
		flexDirection: 'row',
		paddingTop: 5
	},

	ratingText: {
		color: 'grey'
	}
});
export default Services;
