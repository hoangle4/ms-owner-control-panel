import React, { useContext } from 'react';
import Collapsible from 'react-native-collapsible';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import Colors from '../constants/colors';
import AppContext from '../../../context/Appointment/AppointmentContext';

const DatePickeMe = () => {
	const appContext = useContext(AppContext);
	const { date, isDatePickerVisible, setDate } = appContext;
	return (
		<Collapsible collapsed={!isDatePickerVisible}>
			<Calendar
				onDayPress={({ year, month, day }) => setDate(new Date(year, month - 1, day))}
				monthFormat={'MMMM yyyy'}
				hideExtraDays={true}
				firstDay={1}
				markedDates={{
					[moment(date.getTime()).format('YYYY-MM-DD')]: {
						selected: true,
						selectedColor: Colors.light_blue
					},
					[moment().format('YYYY-MM-DD')]: { selected: true, selectedColor: Colors.blue }
				}}
			/>
			<View style={{ backgroundColor: 'black', width: '100%', height: 1 }} />
		</Collapsible>
	);
};

export default DatePickeMe;
