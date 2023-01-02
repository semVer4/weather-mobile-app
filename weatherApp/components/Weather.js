import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243B55']
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5', '#3a6073']
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046','#1CB5E0']
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff']
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#94716B']
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56CCF2', '#2F80ED']
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4']
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b']
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED']
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757F9A', '#D7DDE8']
    },
};

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