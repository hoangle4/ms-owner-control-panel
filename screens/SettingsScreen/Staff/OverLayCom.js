import React from 'react';
import PropTypes from 'prop-types';
import { Button, Overlay, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { deviceHeight, deviceWidth } from '../../../utils/DeviceDimensions';
const OverLayCom = ({ isVisible, setIsVisible }) => {
  return (
    <ScrollView>
      <Overlay
        isVisible={isVisible}
        windowBackgroundColor='rgba(255, 255, 255, .5)'
        overlayBackgroundColor='#bababa'
        width={deviceWidth}
        height={deviceHeight}
        onBackdropPress={() => setIsVisible(false)}
      >
        <View style={styles.formContainer}>
          <View style={styles.formInput}>
            <Input style={styles.formInputField} placeholder='e.g. Sa Nguyen' />
            <Input style={styles.formInputField} placeholder='503-555-5555' />
            <Input
              style={styles.formInputField}
              placeholder='email@example.com'
            />
            <Input
              style={styles.formInputField}
              placeholder='Add staff title (i.e Nail Technician)'
            />
            <Input
              style={styles.formInputField}
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
      </Overlay>
    </ScrollView>
  );
};

OverLayCom.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired
};
OverLayCom.navigationOptions = {
  header: null
};
const styles = StyleSheet.create({});
export default OverLayCom;
