import React, {Component} from 'react';
import {
    AppRegisrty,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Platform
} from 'react-native';

export default class ProfilePage extends Component {
    render() {
        return (
            
            <ImageBackground style = {styles.headerBackground} source= {require('../img/headerbg.jpg')}>

                <View style ={styles.header} >

                        <View style = {styles.profilepicWrap}>
                            <ImageBackground style={{width: 150, height: 150, borderRadius: 150/2}} source = {require('../img/profilepic.jpg')} />
                        </View>
                        
                        <Text style = {styles.name}> Hero Boy </Text> 
                        <Text style = {styles.pos}> BasketBall player </Text> 
                </View>

            </ImageBackground>
        );
        
    }
}

const styles = StyleSheet.create({
    headerBackground: {
        flex : 1,
        width : null,
        alignSelf: 'stretch'
    },
    header: {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        padding : 20 ,
        backgroundColor : 'rgba(0,0,0,0.5)',
    },
    profilepicWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    profilepic: {
        flex : 1 ,
        width :null,
        alignSelf: 'stretch',
        borderRadius: 100,
        borderColor: '#fff' ,
        borderWidth: 4 ,
    },
    name: {
        marginTop: 20,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    pos: {
        fontSize: 14,
        color:'#0394c0',
        fontWeight:'300',
        fontStyle : 'italic'
    }
});
