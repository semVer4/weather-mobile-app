import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Weather = () => {
    return (
        <View style={styles.container}>
            <Text>New page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'silver',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Weather;