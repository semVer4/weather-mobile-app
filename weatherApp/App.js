import Loading from './components/Loading';
import * as Location from 'expo-location';
import { useEffect } from 'react';
import { Alert } from 'react-native';

export default function App() {
  async function getLocation() {
    try {
      const response = await Location.getPermissionsAsync();
      console.log(response)
      const location = await Location.getCurrentPositionAsync();
    } catch (error) {
      Alert.alert('Не могу определить местоположение', "Неприкольно");
    }
  }

  useEffect(() => {
    getLocation();
  }, []);
  
  return (
    <Loading />
  );
}