import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Loading from './components/Loading';
import * as Location from 'expo-location';
import Weather from './components/Weather';
import axios from 'axios';

const API_KEY = 'e8732b6d8241e648d8dac401c7860d7c';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const getWeather = async (latitude, longitude) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    setData(data);
  }

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude);
      setIsLoading(false);
    } catch (error) {
      Alert.alert('Error', 'error location')
    }
  }

  useEffect(() => {
    getLocation();
  }, [])

  return (
    isLoading ? <Loading /> : <Weather />
  );
}
