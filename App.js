import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [names, setNames] = useState([
    {
      id: 1,
      name: 'James'
    },
    {
      id: 2,
      name: 'Richard'
    },
    {
      id: 3,
      name: 'Bob'
    },
    {
      id: 4,
      name: 'Cats'
    },
  ]);

  const clickHandler = (id) => {
    setNames((prevNames) => {
      return prevNames.filter((item) => item.id != id);
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={names}
        numColumns={2}
        renderItem={
          ({item}) => (
            <TouchableOpacity style={styles.listItem} onPress={() => {clickHandler(item.id)}}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },

  boldText: {
    fontWeight: 'bold',
  },

  listItem: {
    backgroundColor: 'pink',
    padding: 20,
    marginVertical: 10
  },

  textInput: {
    borderWidth: 1,
    padding: 5,
    marginVertical: 20,
    width: 200
  }
});
