import React, { useContext, Fragment } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Header from './components/Header';
import DrawnGrid from './components/DrawnGrid';
import TimeCol from './components/TimeCol';
import styles from './components/styles';
import HrLine from './components/HrLine';
import NowBar from './components/NowBar';
import ScheduledData from './components/ScheduledData';
import SmartScroll from './components/SmartScroll';
import DatePickeMe from './components/DatePickeMe';
// import {ContextProvider} from './components/ContextProvider'
import tinycolor from 'tinycolor2';
import Colors from './constants/colors';
import procData from './services/procData';
import AppointmentContext from '../../context/Appointment/AppointmentContext';
const RNSchedule = ({ hourSize, dataArray, headerColor, leftIcon, accentColor, status_bar, onEventPress }) => {
	const appointmentContext = useContext(AppointmentContext);
	const { hour_size } = appointmentContext;
	let data = !!dataArray && procData(dataArray, hourSize);
	console.log(hourSize);
	return (
		<Fragment>
			<View style={styles.container}>
				<Header
					status_bar={status_bar}
					accent={accentColor}
					left_icon={leftIcon}
					header_color={
						tinycolor(headerColor).isValid() ? tinycolor(headerColor).toHexString() : Colors.light_gray
					}
				/>
				<DatePickeMe />
				<SmartScroll hour_size={hourSize}>
					<View style={styles.body}>
						<View style={styles.hour_col}>
							<TimeCol hour_size={hourSize} />
						</View>
						<View style={styles.schedule_col}>
							<DrawnGrid />
							<NowBar hour_size={hourSize} />
							{!!data && <ScheduledData dataArray={data} onEventPress={onEventPress} />}
						</View>
					</View>
				</SmartScroll>
			</View>
		</Fragment>
	);
};

RNSchedule.propTypes = {
	hourSize: PropTypes.number,
	dataArray: PropTypes.array,
	headerColor: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
	leftIcon: PropTypes.node,
	accentColor: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
	onEventPress: PropTypes.func,
	status_bar: PropTypes.bool
};

RNSchedule.defaultProps = {
	hourSize: Dimensions.get('window').height / 13.34,
	headerColor: Colors.light_gray,
	leftIcon: null,
	accentColor: Colors.blue,
	status_bar: true,
	onEventPress: () => {}
};

export default RNSchedule;
