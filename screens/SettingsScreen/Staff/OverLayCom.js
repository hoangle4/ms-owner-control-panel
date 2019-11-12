import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Overlay, Input } from 'react-native-elements';
import StaffContext from '../../../context/Staff/StaffContext';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import NumberInput from '../../../components/NumberInput';
import {
  deviceHeight,
  deviceWidth,
  calcHeight
} from '../../../utils/DeviceDimensions';
const OverLayCom = ({ isVisible, setIsVisible }) => {
  const staffContext = useContext(StaffContext);
  const { addStaff } = staffContext;
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    title: '',
    notes: ''
  });
  const { name, phoneNumber, email, title, notes } = formData;

  const handleOnAddStaff = async () => {
    const result = await addStaff(formData);
    console.log(result);
    setFormData({
      ...formData,
      name: '',
      phoneNumber: '',
      email: '',
      title: '',
      notes: ''
    });
    setIsVisible(false);
  };

  const handleOnCancel = async () => {
    setIsVisible(false);
  };
  console.log(phoneNumber);
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
          <Text style={styles.header}>Add Staff</Text>
          <View style={styles.formInput}>
            <Text>Name</Text>
            <Input
              value={name}
              onChangeText={t => setFormData({ ...formData, name: t })}
              containerStyle={styles.formInputField}
              placeholder='e.g. Sa Nguyen'
            />

            <Text>Phone Number</Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#999',
                marginLeft: 10,
                marginRight: 10,

                flex: 1,
                justifyContent: 'center'
              }}
            >
              <NumberInput
                style={[{ fontSize: 18, height: 40 }]}
                placeholder='503-555-5555'
                value={phoneNumber}
                name='phoneNumber'
                keyboardType='number-pad'
                maxLength={10}
                dataObj={formData}
                onChangeText={setFormData}
              />
            </View>

            <Text>Email</Text>
            <Input
              containerStyle={styles.formInputField}
              placeholder='email@example.com'
              value={email}
              onChangeText={t => setFormData({ ...formData, email: t })}
            />

            <Text>Title</Text>
            <Input
              containerStyle={styles.formInputField}
              placeholder='Add staff title (i.e Nail Technician)'
              value={title}
              onChangeText={t => setFormData({ ...formData, title: t })}
            />

            <Text>Notes</Text>
            <Input
              containerStyle={styles.formInputField}
              placeholder='Private notes of Staff'
              value={notes}
              onChangeText={t => setFormData({ ...formData, notes: t })}
            />
          </View>
          <View style={styles.formButton}>
            <Button
              buttonStyle={{ backgroundColor: '#f2f2f2' }}
              titleStyle={{ color: '#333' }}
              title='Cancel'
              onPress={handleOnCancel}
            />
            <Button title='Save' onPress={handleOnAddStaff} />
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
  header: {
    fontSize: calcHeight(2),
    fontWeight: 'bold'
  },
  formContainer: {
    marginTop: deviceHeight / 10
  },
  formInput: {
    marginBottom: deviceHeight / 10
  },
  formButton: {
    marginBottom: deviceHeight / 10
  },
  formInputField: {
    marginBottom: calcHeight(2)
  }
});
export default OverLayCom;
