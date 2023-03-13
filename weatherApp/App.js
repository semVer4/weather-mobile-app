import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Loading from './components/Loading';
import * as Location from 'expo-location';
import Weather from './components/Weather';
import axios from 'axios';

const API_KEY = '';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState();
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [desc, setDesc] = useState();

  const getWeather = async (latitude, longitude) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=ru`);
    setTemp(data.main.temp);
    setCity(data.name);
    setWeather(data.weather[0].main);
    setDesc(data.weather[0].description);

    setIsLoading(false);
  }

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert('Error', 'error location')
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    isLoading ? <Loading /> : <Weather temp={temp} city={city} weather={weather} desc={desc} />
  );
}
