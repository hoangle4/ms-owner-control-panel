import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TimeArr from '../constants/time';

const TimeCol = ({ hour_size }) => (
  <View style={{ paddingBottom: hour_size / 2 }}>
    {TimeArr.map((val, i) => (
      <View
        style={[
          styles.box,
          {
            height: hour_size,
            borderRightColor: '#bababa',
            borderRightWidth: 1
          }
        ]}
        key={val}
      >
        <Text style={styles.textStyle}>{i % 4 === 0 ? val : ''}</Text>
      </View>
    ))}
  </View>
);

let styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    textAlign: 'center',
    color: '#BABABA'
  }
});

export default TimeCol;
