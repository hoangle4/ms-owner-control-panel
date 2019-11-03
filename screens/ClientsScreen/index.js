import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export default function ClientsScreen() {
  const users = [
    {
      name: 'brynn',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
      name: 'Chris Jackson',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    }
    // more users here
  ];
  return (
    <ScrollView style={styles.container}>
      <Card containerStyle={{ padding: 0 }}>
        {users.map((u, i) => {
          return (
            <ListItem
              key={i}
              roundAvatar
              title={u.name}
              leftAvatar={{ source: { uri: u.avatar } }}
            />
          );
        })}
      </Card>
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
