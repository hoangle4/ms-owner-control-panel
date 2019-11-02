import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { deviceWidth, calcWidth, deviceHeight } from '../../utils/DeviceDimensions';
import api from '../../api';
import StatsContext from '../../context/Stats/StatsContext';
export default function HomeScreen() {
	const [ boxHeight, setBoxHeight ] = useState(0);
	const statsContext = useContext(StatsContext);
	const { getOneDayCheckIn, oneDayCheckins, loading } = statsContext;
	useEffect(() => {
		getOneDayCheckIn();
	}, []);

	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();
	const currentDate = new Date().getDate();
	let start = new Date(currentYear, currentMonth, currentDate, -7);
	let end = new Date(currentYear, currentMonth, currentDate, 16, 59, 59);

	const todayCheckIns =
		!loading &&
		oneDayCheckins.filter((d) => {
			return (
				new Date(d.date).getTime() >= new Date(start).getTime() &&
				new Date(d.date).getTime() <= new Date(end).getTime()
			);
		});
	return (
		<View style={styles.container}>
			<View
				style={styles.headerContainer}
				onLayout={(event) => {
					setBoxHeight(deviceHeight / 2 - event.nativeEvent.layout.height);
				}}
			>
				<Text style={styles.headerText}>Dashboard</Text>
			</View>
			<View style={styles.viewBoxContainer}>
				<View
					style={[
						styles.viewBox,
						{
							backgroundColor: '#F3F7EA',
							height: boxHeight
						}
					]}
				>
					{loading ? (
						<ActivityIndicator size="small" color="#f2f2f2" />
					) : (
						<Text style={{ fontSize: 35, fontWeight: 'bold' }}>{todayCheckIns.length} Check-Ins Today</Text>
					)}
				</View>
				<View
					style={[
						styles.viewBox,
						{
							backgroundColor: '#F3F7EA',
							height: boxHeight
						}
					]}
				>
					<Text>2</Text>
				</View>
				<View
					style={[
						styles.viewBox,
						{
							backgroundColor: '#F3F7EA',
							height: boxHeight
						}
					]}
				>
					<Text>3</Text>
				</View>
				<View
					style={[
						styles.viewBox,
						{
							backgroundColor: '#F3F7EA',
							height: boxHeight
						}
					]}
				>
					{loading ? (
						<ActivityIndicator size="small" color="#f2f2f2" />
					) : (
						<Text style={{ fontSize: 35, fontWeight: 'bold' }}>
							{oneDayCheckins.length} Check-Ins This Month
						</Text>
					)}
				</View>
			</View>
		</View>
	);
}

HomeScreen.navigationOptions = {
	header: null
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		flexWrap: 'wrap'
	},
	contentContainer: {
		paddingTop: 30
	},
	headerContainer: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#282527',
		width: deviceWidth,
		justifyContent: 'center'
	},
	headerText: {
		color: '#f2f2f2',
		fontWeight: 'bold',
		fontSize: 35
	},
	viewBoxContainer: {
		flex: 8,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	viewBox: {
		backgroundColor: '#F3F7EA',
		width: deviceWidth / 2,
		borderWidth: 1,
		borderColor: '#282527',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
