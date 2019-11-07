import React from 'react';
import PropTypes from 'prop-types';
import { calcHeight } from '../../../utils/DeviceDimensions';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Icon } from 'react-native-elements';
const UpComAppt = props => {
  return (
    <Card>
      <View style={styles.wrapperStyle}>
        <Text style={styles.header}> Today's Upcoming Appointments </Text>
        <Text style={{ marginBottom: 10, fontSize: 10 }}>
          Visit the appointment section to add or remove appointments
        </Text>
        <View>
          <Icon
            name='calendar'
            type='feather'
            iconStyle={{
              fontSize: 35,
              marginBottom: 10,
              marginTop: calcHeight(8)
            }}
          />
          <Text
            style={{
              marginBottom: 10,
              fontSize: calcHeight(2),
              fontWeight: 'bold'
            }}
          >
            No Upcoming Appointments
          </Text>
        </View>
      </View>
    </Card>
  );
};

UpComAppt.propTypes = {};
const styles = StyleSheet.create({
  wrapperStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: calcHeight(4),
    fontWeight: 'bold'
  }
});

export default UpComAppt;
