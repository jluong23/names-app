import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function NameItem({item, removeName}) {
    return (
        <TouchableOpacity style={styles.listItem} onPress={() => {removeName(item.id)}}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: 'center'
    },

    listItem: {
        padding: 20,
        marginVertical: 10,
        borderStyle: 'dashed',
        borderWidth: 1,
        
      },
});
  