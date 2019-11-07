import React from 'react';
import PropTypes from 'prop-types';
import { calcHeight } from '../../../utils/DeviceDimensions';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const TotalAppts = (props) => {
	return (
		<Card>
			<View style={styles.wrapperStyle}>
				<Text style={styles.header}> Total Appointments </Text>
				<Text style={{ marginBottom: 10, fontSize: 40 }}>42</Text>
				<View>
					<Text style={styles.text}> Checked Ins </Text>
					<Text style={styles.text}> No Shows </Text>
					<Text style={styles.text}> Cancels </Text>
				</View>
			</View>
		</Card>
	);
};

TotalAppts.propTypes = {};
const styles = StyleSheet.create({
	wrapperStyle: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	header: {
		fontSize: calcHeight(2),
		fontWeight: 'bold'
	},
	text: {
		color: '#bababa',
		fontSize: 10
	}
});
export default TotalAppts;
