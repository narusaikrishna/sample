import { AppRegistry,StyleSheet } from 'react-native';
import React, { Component } from 'react';
import LoginForm from './src/components/LoginForm';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import Movies from './src/components/DemoApiCall';
import configureStore from './src/store/configStore';
const store = configureStore();
// create a component
const abc = () => {
    return (
        <Provider store={store}>
        <Movies/>
        </Provider>
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