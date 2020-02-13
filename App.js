import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location'
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "66dff13c648a6b209d9a0eacee2ff7c8";

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async(lat, lon) =>{
    const {
      data :{
        main: {
          temp
        },
        weather
      }
    } = await axios.get( // api주소 끝에 unit=metric추가해서 화씨->섭씨온도로 받아옴
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    this.setState({
      isLoading: false,
      temp,
      condition: weather[0].main, 
    })
  }
  getLocation = async() =>{
    try{
      await Location.requestPermissionsAsync()
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync()
      this.getWeather(latitude, longitude);
    } catch(error){
      Alert.alert('Cant find you', 'so sad')
    }
  }
  componentDidMount(){
    this.getLocation()
  }
  render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}
