import React, { Component } from 'react';
import { WeatherWidget } from 'react-native-weather';

import {
  View,
  Text,
  Alert,
  Image,
  Button,
  StyleSheet,
  WebView,
  Linking,
} from 'react-native';

export default class Weather extends Component {
  static navigationOptions = {
        title: 'Weather',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#2F95D6',
          borderBottomColor: '#ffffff',
          borderBottomWidth: 3,
        },
        headerTitleStyle: {
          fontSize: 18,
        },
    };
  render() {
    const uri = 'http://stackoverflow.com/questions/35531679/react-native-open-links-in-browser';
    const { region } = this.props;
    console.log(region);
    const style = StyleSheet.create({
    textSponsorHeading: {
      textAlign: 'center',
      color:'grey',
      fontWeight:'bold',
      alignItems:'center',
      fontSize:22,
      justifyContent: 'center',
    },
    map: {
   ...StyleSheet.absoluteFillObject,
 },

   buttonLink: {
     color:'#242424',
   }
});
      return(
          <View>
          <Text style={style.textSponsorHeading}>AUCKLAND </Text>
          <WeatherWidget
               api={"137a53d3b88a70c07023e3dc42dadeb9"}
               lat={"36.8485"}
               lng={"174.7633"}
               />
          </View>

      );


  }

}
