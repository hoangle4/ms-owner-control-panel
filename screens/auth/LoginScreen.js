import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import {
  deviceWidth,
  calcWidth,
  deviceHeight
} from '../../utils/DeviceDimensions';
import { Input } from 'react-native-elements';
import AuthContext from '../../context/Auth/AuthContext';
const LoginScreen = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { error, loginOwner, isAuthenticated, loading } = authContext;

  useEffect(() => {
    if (isAuthenticated && !loading) {
      navigation.navigate('Main');
    } else {
      navigation.navigate('Auth');
    }
  }, [isAuthenticated]);

  const [loginValue, setLoginValue] = useState({
    email: '',
    password: ''
  });
  const { email, password } = loginValue;

  const handleOnLogIn = async e => {
    const result = await loginOwner(loginValue);
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 25,
            marginBottom: 20,
            color: '#f2f2f2',
            borderBottomColor: '#f2f2f2',
            borderBottomWidth: 1
          }}
        >
          Log In
        </Text>
        <Input
          name='email'
          value={email}
          onChangeText={e => setLoginValue({ ...loginValue, email: e })}
          placeholder='Email'
          inputStyle={{ paddingLeft: 10, color: '#f2f2f2' }}
          leftIcon={{ type: 'feather', name: 'mail', color: '#f2f2f2' }}
        />

        <Input
          name='password'
          value={password}
          onChangeText={e => setLoginValue({ ...loginValue, password: e })}
          placeholder='Password'
          inputStyle={{ paddingLeft: 10, color: '#f2f2f2' }}
          leftIcon={{ type: 'feather', name: 'lock', color: '#f2f2f2' }}
          secureTextEntry={true}
          errorStyle={{ color: 'red', fontSize: 15 }}
          errorMessage={`${error ? error.errors.map(e => `${e.msg} \n`) : ''}`}
        />
        <TouchableHighlight
          underlayColor='#C169FF'
          style={styles.button}
          onPress={handleOnLogIn}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

LoginScreen.propTypes = {};
LoginScreen.navigationOptions = {
  title: 'MS - Check-In - Control - Panel',
  headerStyle: {
    backgroundColor: '#282527'
  },
  headerTintColor: '#f2f2f2',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F7EA',
    width: deviceWidth,
    height: deviceHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#7A776A',
    padding: 15,
    marginTop: 20
  },
  buttonText: {
    color: '#f2f2f2',
    fontSize: 20,
    textAlign: 'center'
  },
  loginContainer: {
    backgroundColor: '#282527',
    width: deviceWidth / 2,
    padding: calcWidth(5)
  }
});
