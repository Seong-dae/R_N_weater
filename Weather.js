import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"

const weatherOptions = {
    Haze:{
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Mist:{
        iconName: "weather-rainy",
        gradient: ["#3a7bd5", "#267871"]
    },
    Thunderstorm :{
        iconName: "weather-lightning-rainy",
        gradient:["#BA8B02", "#181818"]
    },
    Drizzle :{
        iconName: "weather-hail",
        gradient:["#BA5370", "#F4E2D8"]
    },
    Rain :{
        iconName: "weather-rainy",
        gradient:["#3d72b4", "#525252"]
    },
    Snow :{
        iconName: "weather-snowy",
        gradient:["#d7d2cc", "#304352"]
    },
    Atmosphere :{
        iconName: "weather-hail",
        gradient:["#A43931", "#1D4350"]
    },
    Clear :{
        iconName: "weather-sunny",
        gradient:["#E0EAFC","#CFDEF3"]
    },
    Clouds :{
        iconName: "weather-cloudy",
        gradient:["#4B79A1", "#283E51"]
    },
    Dust :{
        iconName: "weather-hail",
        gradient:["#2c3e50","#2980b9"]
    }
}

export default function Weather({temp, condition}){
    return (
        <LinearGradient
          colors={weatherOptions[condition].gradient}
          style= {styles.container}>
            {/* <StatusBar barStyle="dark-content"/> */}
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    color="white"
                    name={weatherOptions[condition].iconName}/>
                <Text style={styles.temp}>
                    {temp}°
                </Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.temp}>
                    {condition}
                </Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp:{
        fontSize:36,
        color: "white"
    },
    halfContainer: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    }
})
