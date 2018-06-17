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
  constructor (props){
    super(props);
    this.state = {
    latitude: null,
    longitude: null,
    error: null,
};
  }
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



componentDidMount() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    },
    (error) => this.setState({ error: error.message }),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  );
}
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
  justifyContent: 'flex-end',
  alignItems: 'center',
},

   buttonLink: {
     color:'#242424',
   }
});
      return(

            <View style ={style.container}>
            <MapView
              showsUserLocation={true}
              style={style.map}
              region={{
                latitude: this.state.latitude,
                longitude:this.state.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
            </MapView>
          </View>


      );


  }

}
