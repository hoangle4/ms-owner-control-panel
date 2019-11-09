import React from 'react';
import PropTypes from 'prop-types';
import { Button, Overlay, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import {
  deviceHeight,
  deviceWidth,
  calcHeight
} from '../../../utils/DeviceDimensions';
const OverLayCom = ({ isVisible, setIsVisible }) => {
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor='rgba(255, 255, 255)'
      overlayBackgroundColor='#ffffff'
      width={deviceWidth}
      height={deviceHeight}
      onBackdropPress={() => setIsVisible(false)}
    >
      <ScrollView>
        <View style={styles.formContainer}>
          <View style={styles.formInput}>
            <Text>Name</Text>
            <Input
              containerStyle={styles.formInputField}
              placeholder='e.g. Sa Nguyen'
            />

            <Text>Phone Number</Text>
            <Input
              containerStyle={styles.formInputField}
              placeholder='503-555-5555'
            />

            <Text>Email</Text>
            <Input
              containerStyle={styles.formInputField}
              placeholder='email@example.com'
            />

            <Text>Title</Text>
            <Input
              containerStyle={styles.formInputField}
              placeholder='Add staff title (i.e Nail Technician)'
            />

            <Text>Notes</Text>
            <Input
              containerStyle={styles.formInputField}
              placeholder='Private notes of Staff'
            />
          </View>
          <View style={styles.formButton}>
            <Button
              buttonStyle={{ backgroundColor: '#f2f2f2' }}
              titleStyle={{ color: '#333' }}
              title='Cancel'
              onPress={() => setIsVisible(false)}
            />
            <Button
              title='Save'
              // onPress={() => setIsVisible(true)}
            />
          </View>
        </View>
      </ScrollView>
    </Overlay>
  );
};

OverLayCom.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired
};
OverLayCom.navigationOptions = {
  title: ' Add Staff'
};
const styles = StyleSheet.create({
  formContainer: {
    marginTop: deviceHeight / 10
  },
  formInput: {
    marginBottom: deviceHeight / 10
  },
  formButton: {},
  formInputField: {
    marginBottom: calcHeight(2)
  }
});
export default OverLayCom;
