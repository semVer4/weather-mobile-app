import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Получение погоды...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: '30',
        paddingVertical: '30',
        backgroundColor: '#FEF3A2'
    },
    text: {
        color: 'black',
        fontSize: '25',
    }
})

export default Loading;