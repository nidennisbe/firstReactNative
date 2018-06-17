import React, { Component, PropTypes } from 'react';
import { StackNavigator } from 'react-navigation';


import {
  View,
  Text,
  Alert,
  Image,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  static navigationOptions = {
        title: 'Home',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#ffffff',
          borderBottomColor: '#ffffff',
          borderBottomWidth: 3,
        },
        headerTitleStyle: {
          fontSize: 18,
          color:'#1d1d1d',
        },
    };


  render() {
    const style = StyleSheet.create({

    buttonblue: {
    color: '#dea944',
    fontWeight: 'bold',
    fontSize: 40,
    alignItems:'center',
    justifyContent: 'center',
    flex:1,
    },

    mainviewStyle: {
    flex: 1,
    marginTop:2,
    alignItems:'center',
    backgroundColor: '#000000',
    flexDirection: 'column'
    },

    footer: {
    position: 'absolute',
    flex:0.1,
    backgroundColor: '#ffffff',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection:'row',
    height:40,
    alignItems:'center',
    },

    footerText: {
    textAlign: 'center',
    color:'white',
    fontWeight:'bold',
    alignItems:'center',
    fontSize:18,
    justifyContent: 'center',
    },

    inputTextSection: {
      padding: 20,
      width:220,
      borderRadius: 5,
      backgroundColor:'#ffffff',
      marginTop:20,

    },

    });
    return(
      <View style={style.mainviewStyle}>
        <Image source={{uri: 'https://i.pinimg.com/originals/d6/0d/22/d60d22ea3e95266b9c4dbfc986f472b2.jpg'}}
               style={{flex: 1,width: 400,}}
               />


          <View style={style.footer}>

            <Button
                onPress ={() => this.props.navigation.navigate("News")}
                style={style.buttonblue}
                title="News"
                color= "#EC894D"
                accessibilityLabel="Learn more about this purple button"
              />

          <Button
                onPress ={() => this.props.navigation.navigate("Weather")}
                style={style.buttonblue}
                title="Weather"
                accessibilityLabel="Learn more about this purple button"
              />
              <Button
                  style={style.buttonblue}
                  title="Alert"
                  accessibilityLabel="Learn more about this purple button"
                />
              <Button
                    style={style.buttonblue}
                    onPress ={() => this.props.navigation.navigate("Map")}
                    title="Map"
                    accessibilityLabel="Learn more about this purple button"
                  />
                  <Button
                      style={style.buttonblue}
                      onPress ={() => this.props.navigation.navigate("Camera")}
                      title="Camera"
                      accessibilityLabel="Learn more about this purple button"
                    />

                    <Button
                      onPress ={() => this.props.navigation.navigate("Weather")}
                      style={style.buttonblue}
                      title="Logout"
                      />
                </View>
        <View style={{ alignSelf:'stretch',alignItems: 'center',flex: 1, flexDirection: 'row'}}>

          </View>
      </View>
);

  }
}
