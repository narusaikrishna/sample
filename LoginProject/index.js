import { AppRegistry,StyleSheet } from 'react-native';
import { App } from './App';
import React, { Component } from 'react';
import LoginForm from './LoginForm';


// create a component
const abc = () => {
    return (
        <LoginForm  textOnOpen='submit'/>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});




AppRegistry.registerComponent('LoginProject', () => abc);