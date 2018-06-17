import React, { Component } from 'react';
import MapView from 'react-native-maps';


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

export default class Map extends Component {
  static navigationOptions = {
        title: 'Map',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#2F95D6',
          borderBottomColor: '#ffffff',
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
      flex:1,
   ...StyleSheet.absoluteFillObject,
 },
 container: {
  ...StyleSheet.absoluteFillObject,
  height: 400,
  width: 400,
  justifyContent: 'flex-end',
  alignItems: 'center',
},

   buttonLink: {
     color:'#242424',
   }
});
      return(
          <View>
            <View style ={style.container}>
            <MapView
              style={style.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
            </MapView>
          </View>
          </View>

      );


  }

}
