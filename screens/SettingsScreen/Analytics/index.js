import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';
import TotalAppts from './TotalAppts';
import OnlineAppts from './OnlineAppts';
const Analytics = (props) => {
	return (
		<ScrollView>
			<TotalAppts />
			<OnlineAppts />
		</ScrollView>
	);
};

Analytics.propTypes = {};

export default Analytics;
