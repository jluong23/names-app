import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "./components/Header";
import NameForm from './components/NameForm';
import NameItem from './components/NameItem';
export default function App() {
  const [names, setNames] = useState([
    {id: 1, name: 'James'},
    {id: 2, name: 'Richard'},
    {id: 3, name: 'Bob'},
  ]);

  const removeName = (id) => {
    setNames((prevNames) => {
      return prevNames.filter((item) => item.id != id);
    })
  }    

  const addName = (name) => {
    if(name && name.length > 0){
      setNames((prevNames) => {
        const newName = {name, id:prevNames.length+1} 
        return [newName, ...prevNames]
      })
    }else{
      Alert.alert('Error', 'Please enter a name before submitting.', [
        {text: 'Ok'}
      ])
    }
  }

  const namesList =      
    <FlatList 
      style={styles.namesList}
      keyExtractor={(item) => item.id}
      data={names}
      renderItem={
        ({item}) => <NameItem item={item} removeName={removeName}/>
      }
    />

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <NameForm addName={addName}/>
          {namesList}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1
  },
  namesList: {
    padding: 20,
    flex: 1
  },
});
