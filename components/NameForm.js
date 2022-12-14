import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function NameForm({addName}) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    return (
        <View style={styles.formWrapper}>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => {setName(text)}}
                placeholder="New name"
            />
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => {setDescription(text)}}
                placeholder="Description"
            />
            <View style={styles.submitButton}>
                <Button onPress={() => {addName(name, description)}} title="Submit"/>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    formWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
      borderWidth: 1,
      padding: 5,
      marginVertical: 10,
      width: 300
    },

    submitButton: {
        width: 100,
        color: 'cornflowerblue'
    }
  });