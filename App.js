import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "./components/Header";
import NameForm from './components/NameForm';
import NameItem from './components/NameItem';
export default function App() {
  const [names, setNames] = useState([
    {id: 1, name: 'Elsa', description: 'From Frozen'},
    {id: 2, name: 'James R', description: 'My old housemate!'},
    {id: 3, name: 'Bob', description: 'Street Fighter'},
  ]);

  const removeName = (id) => {
    setNames((prevNames) => {
      return prevNames.filter((item) => item.id != id);
    })
  }    

  const addName = (name, description) => {
    const nameValid = name && name.length > 0;
    const descriptionValid = description && description.length > 0;
    if(nameValid && descriptionValid){
      setNames((prevNames) => {
        const newName = {name, description, id:prevNames.length+1} 
        return [newName, ...prevNames]
      })
    }else{
      const errorMsg = nameValid ? 'Please enter a description' : 'Please enter a name';
      Alert.alert('Error', errorMsg, [
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
