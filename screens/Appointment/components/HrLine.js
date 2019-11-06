import React, { useContext, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import AppContext from '../../../context/Appointment/AppointmentContext';

const HrLine = ({ color, width }) => {
  const appContext = useContext(AppContext);
  const { hour_size } = appContext;
  const [bgColor, setBgColor] = useState('transparent');
  return (
    <View
      style={{
        width: '100%',
        borderBottomColor: color,
        borderBottomWidth: width,
        backgroundColor: bgColor
      }}
    >
      <TouchableOpacity
        style={{
          width: '100%',
          paddingTop: hour_size - width,
          borderRightWidth: width,
          borderRightColor: color
        }}
        onPress={e => console.log(e)}
        onPressIn={() => setBgColor('#000')}
        onPressOut={() => setBgColor('transparent')}
      />
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
