import { Ionicons } from '@expo/vector-icons' 
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function NameItem({item, removeName}) {

    const nameAlert = () => {
        Alert.alert(item.name, item.description, [
            {
                text: 'Delete',
                style: 'destructive',
                onPress: () => {removeName(item.id)}
            },
            {
                text: 'Close',
            }
        ])
    }

    return (
        <TouchableOpacity style={styles.listItem} onPress={nameAlert}>
            <Ionicons style={styles.deleteIcon} name="person-sharp" size={15} color="black" />
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
        flexDirection: 'row'
        
      },

    deleteIcon: {
        marginRight: 10
    }
});
  