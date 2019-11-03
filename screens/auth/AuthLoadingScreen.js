import React, { useEffect, useContext } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import AuthContext from '../../context/Auth/AuthContext';
export default function AuthLoadingScreen({ navigation }) {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  useEffect(() => {
    if (loading) {
      navigation.navigate('AuthLoading');
    } else if (!loading && !isAuthenticated) {
      navigation.navigate('Auth');
    } else {
      navigation.navigate('Main');
    }
  }, [isAuthenticated]);
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle='default' />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
