import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import weatherOptions from '../weatherOptions';

const Weather = ({temp, city, weather, desc}) => {
    return (
        <LinearGradient colors={weatherOptions[weather].gradient} style={styles.container}>
            <StatusBar backgroundColor={weatherOptions[weather].gradient[0]} barStyle="light-content" />
            <View style={styles.halfcontainer}>
                <MaterialCommunityIcons name={weatherOptions[weather].iconName} size={90} color="white" />
                <Text style={styles.temp}>{`${Math.floor(temp)}°`}</Text>
            </View>
            <View style={{...styles.halfcontainer, ...styles.textContainer}}>
                <Text style={styles.city}>{city}</Text>
                <Text style={styles.weather}>{desc}</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9A223F',
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        color: '#ffff',
        fontSize: 40
    },
    city: {
        color: '#ffff',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10
    },
    weather: {
        color: '#ffff',
        fontWeight: '600',
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20
    }
});

export default Weather;