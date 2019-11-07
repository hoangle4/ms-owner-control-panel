import React from 'react';
import { ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native';
export default function SettingsScreen(props) {
  const list = [
    {
      title: 'Home',
      icon: 'home'
    },
    {
      title: 'Staff',
      icon: 'people'
    },
    {
      title: 'Services',
      icon: 'book'
    },
    {
      title: 'Inventory',
      icon: 'assessment'
    },
    {
      title: 'Analytics',
      icon: 'pie-chart'
    },
    {
      title: 'Setup',
      icon: 'perm-data-setting'
    },
    {
      title: 'Contact Support',
      icon: 'help-outline'
    },
    {
      title: 'Help Center',
      icon: 'help'
    },
    {
      title: 'Logout',
      icon: 'exit-to-app'
    }
  ];
  return (
    <ScrollView>
      {list.map((item, i) => (
        <ListItem
          key={i}
          title={item.title}
          leftIcon={{ name: item.icon }}
          bottomDivider
          chevron
          onPress={e =>
            props.navigation.navigate(item.title.split(' ').join(''))
          }
        />
      ))}
    </ScrollView>
  );
}

SettingsScreen.navigationOptions = {
  title: 'Setting'
};
