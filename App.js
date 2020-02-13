import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location'
import { Alert } from 'react-native';
import axios from 'axios';

const API_KEY = "66dff13c648a6b209d9a0eacee2ff7c8";

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async(lat, lon) =>{
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    console.log(data)
  }
  getLocation = async() =>{
    try{
      await Location.requestPermissionsAsync()
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync()
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false})
    } catch(error){
      Alert.alert('Cant find you', 'so sad')
    }
  }
  componentDidMount(){
    this.getLocation()
  }
  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : <Loading />;
  }
}
