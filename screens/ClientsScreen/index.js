import React, { useContext } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import StatsContext from '../../context/Stats/StatsContext';
export default function ClientsScreen() {
  const statsContext = useContext(StatsContext);
  const { allCustomers, loading } = statsContext;
  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Card containerStyle={{ padding: 0 }}>
          {allCustomers &&
            allCustomers.map((u, i) => {
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  title={u.name}
                  leftAvatar={{ source: { uri: u.avatar } }}
                  bottomDivider
                />
              );
            })}
        </Card>
      )}
    </ScrollView>
  );
}

ClientsScreen.navigationOptions = {
  title: 'Clients'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
