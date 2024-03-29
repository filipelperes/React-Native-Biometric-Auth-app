import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import Home from './home';

export default class App extends Component {
    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Route exact path="/" component={Home} />
                </View>
            </NativeRouter>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
