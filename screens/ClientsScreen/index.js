import React, { useContext, useState, Fragment } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, ListItem, SearchBar } from 'react-native-elements';
import StatsContext from '../../context/Stats/StatsContext';
export default function ClientsScreen() {
  const statsContext = useContext(StatsContext);
  const { allCustomers, loading } = statsContext;
  const [searchQuery, setSearchQuery] = useState('');
  const [filterClients, setFilterClients] = useState([]);
  const [loadingIcon, setLoadingIcon] = useState(false);
  let Timeout;
  const onInputHandler = async s => {
    clearTimeout(Timeout);
    setLoadingIcon(true);
    const value = s.toLowerCase();
    await setSearchQuery(value.trim());
    let user;
    Timeout = setTimeout(() => {
      user = allCustomers.filter(
        u =>
          u.name &&
          u.name
            .split(' ')
            .join('')
            .toLowerCase()
            .includes(searchQuery)
      );

      if (!user) return;
      setFilterClients(user);
      setLoadingIcon(false);
    }, 5000);
  };

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Fragment>
          <SearchBar
            placeholder='Name, Email or Phone Number'
            onChangeText={s => onInputHandler(s)}
            value={searchQuery}
            lightTheme={true}
            onClear={() => setSearchQuery('')}
            round={true}
            showLoading={loadingIcon}
          />
          <Card containerStyle={{ padding: 0 }}>
            {(filterClients.length === 0 &&
              allCustomers &&
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
              })) ||
              filterClients.map((u, i) => {
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
        </Fragment>
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
