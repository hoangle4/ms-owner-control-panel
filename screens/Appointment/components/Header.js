import React, { useContext } from 'react';
import { View, Text, Platform, Image, TouchableOpacity } from 'react-native';
import AppContext from '../../../context/Appointment/AppointmentContext';
import tinycolor from 'tinycolor2';
import styles from './headerStyles';
import moment from 'moment';

const Header = ({ header_color, left_icon, accent, status_bar }) => {
	const appContext = useContext(AppContext);
	const { toggleDatePicker, date, isDatePickerVisible, setToday } = appContext;
	var color1 = tinycolor(header_color);
	var text_color = color1.isDark() ? '#fff' : '#000';
	var accent_color = tinycolor(accent);
	var accent_text_color = accent_color.isDark() ? '#fff' : '#000';
	const marginTop = status_bar && Platform.OS == 'ios' ? 20 : 0;
	var icon = color1.isDark()
		? require('../icons/calendar_today_white.png')
		: require('../icons/calendar_today_black.png');
	var arrow_down = color1.isDark()
		? require('../icons/arrow_drop_down_white.png')
		: require('../icons/arrow_drop_down_black.png');

	return (
		<View style={[ styles.container, { backgroundColor: header_color, marginTop: marginTop } ]}>
			<View style={styles.text_row}>
				{left_icon}
				<TouchableOpacity style={styles.center} onPress={() => toggleDatePicker()}>
					<View style={styles.day_box}>
						<Text style={[ styles.dotw, { color: accent_color } ]}>
							{moment(date).format('ddd').toUpperCase()}
						</Text>
						<View style={[ styles.circle, { backgroundColor: accent_color } ]}>
							<Text style={[ styles.day, { color: accent_text_color } ]}>{moment(date).format('D')}</Text>
						</View>
					</View>
					<Text style={[ styles.month, { color: text_color } ]}>{moment(date).format('MMMM')}</Text>
					<Image source={arrow_down} style={isDatePickerVisible ? styles.arrow_up : styles.arrow_down} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.img} onPress={() => setToday()}>
					<Image source={icon} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Header;
