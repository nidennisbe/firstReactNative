import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { Badge,Card,CardItem, Item, Right, Input,Drawer,View, Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import NightMapStyles from './MapStyles/NightMapStyles.json';


import {
  Alert,
  Image,
  StyleSheet,
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
var markers = [{
  latitude:-36.862674,
  longitude:174.760145,
  title: 'System7'
}];
  }
  static navigationOptions = {
        title: 'Map',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#3f38c2',
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
              customMapStyle={NightMapStyles}
              style={style.map}
              region={{
                latitude:-36.862674,
                longitude:174.760145,
                latitudeDelta: 0.1115,
                longitudeDelta: 0.1221,
              }}
              >
              <MapView.Marker

           image={require('../asset/pin.png')}
           coordinate={{
             latitude: 37.78825,
             longitude: -122.4324}}
           title={"title"}
           description={"description"}
        />
    </MapView>
          </View>


      );


  }

}
