import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import AppContext from '../../../context/Appointment/AppointmentContext';

const NowBar = ({ hour_size }) => {
	const appContext = useContext(AppContext);
	const { date, isDatePickerVisible, setDate } = appContext;
	const [ calcPad, setCalcPad ] = useState(0);

	let _interval;
	useEffect(() => {
		var int_ms = 900000 - 6000 * hour_size; // set an interval trigger based on size of an hour

		_setHeight();

		_interval = setInterval(() => {
			_setHeight();
		}, int_ms);

		return clearInterval(_interval);
	}, []);

	const _setHeight = () => {
		var midnight = new Date();
		midnight.setHours(0, 0, 0, 0);
		var now = new Date();
		var hours = (now - midnight) / 3600000;
		var calc_pad = hours * hour_size - 1;

		setCalcPad({
			calc_pad
		});
	};

	if (!sameDay(date, new Date())) {
		return <View />;
	}

	return (
		<View
			style={{
				width: '100%',
				paddingTop: calcPad,
				borderBottomColor: 'black',
				borderBottomWidth: 2,
				position: 'absolute'
			}}
		/>
	);
};

const sameDay = (d1, d2) => {
	return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
};

export default NowBar;
