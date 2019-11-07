import React from 'react';
import PropTypes from 'prop-types';
import { calcHeight, deviceHeight } from '../../../utils/DeviceDimensions';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
const UpComAppt = props => {
  const list = [
    {
      name: 'Amy Farha',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Amy Farha',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Amy Farha',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    }
  ];
  return (
    <Card>
      <View style={styles.wrapperStyle}>
        <Text style={styles.header}> Appointments Activity </Text>
        <ScrollView>
          {list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
            />
          ))}
        </ScrollView>
      </View>
    </Card>
  );
};

UpComAppt.propTypes = {};
const styles = StyleSheet.create({
  wrapperStyle: { height: deviceHeight / 2 },
  header: {
    fontSize: calcHeight(4),
    fontWeight: 'bold'
  }
});

export default UpComAppt;
