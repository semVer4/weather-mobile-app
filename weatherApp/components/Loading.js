import React from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';

const path = { uri: '../assets/amg.jpg' }; 

const Loading = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <ImageBackground source={require('../assets/amg.jpg')} style={styles.image}>
                <Text style={styles.text}>LOADING...</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000a0',
    }
});

export default Loading;