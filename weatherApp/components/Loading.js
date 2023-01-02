import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Loading weather...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEF3A2'
    },
    text: {
        color: 'black',
        fontSize: 30
    }
});

export default Loading;