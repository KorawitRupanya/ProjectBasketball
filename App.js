/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';

import Header from './app/component/header';
import Bar from './app/component/bar';
import PhotoGrid from './app/component/photogrid';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <View style = {style.container}>
            <Header/>
            <Bar/>
            <PhotoGrid/>
        </View>
    );
    
}
}

const style = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#000'
}
});

