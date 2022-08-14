import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://mocki.io/v1/55f750b2-cf14-4c81-a5d6-1eff4d4a0dc5')
      .then(response => {
        console.log(
          '🚀 ~ file: App.js ~ line 13 ~ useEffect ~ response.data',
          response.data,
        );
        setData(response.data);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.email}</Text>
              <Text>{item.first_name}</Text>
              <Text>{item.last_name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
