import React, { useContext } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import AppContext from '../../../context/Appointment/AppointmentContext';

const HrLine = ({ color, width }) => {
	const appContext = useContext(AppContext);
	const { hour_size } = appContext;
	return (
		<View
			style={{
				width: '100%',
				paddingTop: hour_size - width,
				borderBottomColor: color,
				borderBottomWidth: width
			}}
		/>
	);
};

HrLine.propTypes = {
	color: PropTypes.string,
	width: PropTypes.number
};

HrLine.defaultProps = {
	color: '#BABABA',
	width: 1
};

export default HrLine;
