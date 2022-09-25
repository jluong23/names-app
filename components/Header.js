import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Names</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        paddingVertical: 30,
        backgroundColor: 'cornflowerblue' 
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
        
    }
});
  