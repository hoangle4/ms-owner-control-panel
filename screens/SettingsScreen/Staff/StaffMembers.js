import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { calcHeight } from '../../../utils/DeviceDimensions';
import OverLayCom from './OverLayCom';
const StaffMember = props => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <ScrollView>
      <Button
        icon={<Icon name='plus' size={15} color='white' />}
        iconLeft
        title=' Add Staff'
        onPress={() => setIsVisible(true)}
      />
      <View style={styles.row}>
        <View style={[styles.iconCol, styles.col]}>
          <Text>Icon Header</Text>
        </View>
        <View style={[styles.nameCol, styles.col]}>
          <Text>Name Col</Text>
        </View>
        <View style={[styles.phoneCol, styles.col]}>
          <Text>Phone Col</Text>
        </View>
        <View style={[styles.emailCol, styles.col]}>
          <Text>Email Col</Text>
        </View>
        <View style={[styles.onlineBookCol, styles.col]}>
          <Text>Online Col</Text>
        </View>
        <View style={[styles.permissionCol, styles.col]}>
          <Text>Permission Col</Text>
        </View>
      </View>

      <OverLayCom isVisible={isVisible} setIsVisible={setIsVisible} />
    </ScrollView>
  );
};

StaffMember.propTypes = {};
StaffMember.navigationOptions = {
  header: null
};
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    marginTop: calcHeight(2)
  },
  col: {
    backgroundColor: '#999',
    textAlign: 'center'
  },
  iconCol: {
    width: '10%'
  },
  nameCol: {
    width: '17.5%'
  },
  phoneCol: {
    width: '17.5%'
  },
  emailCol: {
    width: '25%'
  },
  onlineBookCol: {
    width: '15%'
  },
  permissionCol: {
    width: '15%'
  }
});
export default StaffMember;
