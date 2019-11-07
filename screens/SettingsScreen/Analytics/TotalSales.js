import React from 'react';
import PropTypes from 'prop-types';
import { calcHeight } from '../../../utils/DeviceDimensions';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const TotalSales = (props) => {
	return (
		<Card>
			<View style={styles.wrapperStyle}>
				<Text style={styles.header}> Total Sales </Text>
				<Text style={{ marginBottom: 10, fontSize: 40 }}>$792</Text>
				<View>
					<Text style={styles.text}> Services </Text>
					<Text style={styles.text}> Products</Text>
					<Text style={styles.text}> Fees </Text>
				</View>
			</View>
		</Card>
	);
};

TotalSales.propTypes = {};
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
export default TotalSales;
