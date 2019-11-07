import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AppContext from '../../../context/Appointment/AppointmentContext';
import PropTypes from 'prop-types';

const StaffNameHeader = ({ staff }) => {
  const appContext = useContext(AppContext);
  const { toggleDatePicker, date, isDatePickerVisible, setToday } = appContext;

  return (
    <View
      style={[styles.container, { backgroundColor: '#f5f5f6', marginTop: 0 }]}
    >
      <View style={styles.textContainer}>
        <View style={styles.textHidden}>
          <Text></Text>
        </View>
        <View style={styles.name_row}>
          {staff.map((s, i) => (
            <TouchableOpacity
              key={i}
              style={{ width: `${100 / staff.length}%`, height: '100%' }}
            >
              <Text style={(styles.text, [{ width: `100%` }])}> {s.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

StaffNameHeader.propTypes = {
  staff: PropTypes.array.isRequired
};
const styles = StyleSheet.create({
  container: {
    height: 56,
    zIndex: 999,
    elevation: 3,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.99,
    shadowRadius: 3
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  textHidden: {
    width: 60,
    flexDirection: 'column'
  },
  name_row: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  text: { alignItems: 'center' }
});
export default StaffNameHeader;
