import React, {Component} from 'react';
import {
    AppRegisrty,
    StyleSheet,
    View
} from 'react-native';

import Header from './app/component/header';
import Bar from './app/component/bar';
import PhotoGrid from './app/component/photogrid';

export default class ProfilePage extends Component {
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

