import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading(){
    return (
    <View style = {styles.container}>
        <StatusBar barStyle="dark-content"/>
        <Text style = {styles.text}>Getting the Weather Info</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "flex-end",
        padding: 20,
        paddingHorizontal: 30,
        backgroundColor: "#FDF6AA",
    },
    text: {
        color: "#2c2c2c",
        fontSize: 50,
    }
})

// {
//     "coord":{
//         "lon":126.97,
//         "lat":37.4
//     },
//     "weather":[
//         {
//         "id":701,
//         "main":"Mist",
//         "description":"mist",
//         "icon":"50n"
//     }],
//     "base":"stations",
//     "main":{
//         "temp":279.88,
//         "feels_like":277.23,
//         "temp_min":279.15,
//         "temp_max":281.15,
//         "pressure":1020,
//         "humidity":87
//     },
//     "visibility":3219,
//     "wind":{
//         "speed":2.1,
//         "deg":10
//     },
//     "clouds":{
//         "all":40
//     },
//     "dt":1581588394,
//     "sys":{
//         "type":1,
//         "id":8090,
//         "country":"KR",
//         "sunrise":1581546293,
//         "sunset":1581584880},
//         "timezone":32400,
//         "id":1841909,
//         "name":"Gwacheon",
//         "cod":200
//     }