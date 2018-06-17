import React, { Component } from 'react';


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

export default class Sponsors extends Component {

  static navigationOptions = {
        title: 'Sponsors',
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
          <Text style={style.textSponsorHeading}>Links to websites </Text>
          <Button
            style={style.buttonLink}
            title="Link to home page"
            onPress={()=> {Linking.openURL('http://www.obc.co.nz/')}}  />

            <Button
              style={style.buttonLink}
              title="Link to History"
              onPress={()=> {Linking.openURL('http://www.obc.co.nz/about-us/history/')}}  />
              <Button
                title="Link 3"
                onPress={()=> {Linking.openURL('http://www.obc.co.nz/')}}  />
          <Text style={style.textSponsorHeading}>Discounts </Text>
            <View style ={style.container}>
      
      </View>
          </View>

      );


  }

}
