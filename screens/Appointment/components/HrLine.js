import React, { useContext, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import AppContext from '../../../context/Appointment/AppointmentContext';

const HrLine = ({ color, width, borderTop, time }) => {
  const appContext = useContext(AppContext);
  const { hour_size } = appContext;
  const [bgColor, setBgColor] = useState('transparent');
  const [showSmallTime, setShowSmallTime] = useState(false);
  return (
    <View
      style={{
        width: '100%',
        borderBottomColor: color,
        borderBottomWidth: width,
        backgroundColor: bgColor,
        borderTopColor: '#000',
        borderTopWidth: borderTop ? 1 : 0,
        borderRightColor: '#000',
        borderRightWidth: 1
      }}
    >
      <TouchableOpacity
        style={{
          width: '100%',
          height: hour_size - width,
          borderRightWidth: width,
          borderRightColor: color
        }}
        onPress={e => console.log(e)}
        onPressIn={() => {
          setBgColor('#999');
          setShowSmallTime(true);
        }}
        onPressOut={() => {
          setBgColor('transparent');
          setShowSmallTime(false);
        }}
      >
        <Text style={{ color: '#007aff' }}> {showSmallTime ? time : ''}</Text>
      </TouchableOpacity>
    </View>
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
