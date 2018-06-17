import React, { Component, PropTypes } from 'react';
import { StackNavigator } from 'react-navigation';


import {
  View,
  Text,
  Alert,
  Image,
  ImageBackground,
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
        title: 'WELCOME TO OBC AUCKLAND',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#21c5e4',
          borderBottomColor: '#ffffff',
        },
        headerTitleStyle: {
          fontSize: 18,
          color:'#ffffff',
        },
    };


  render() {
    const style = StyleSheet.create({

    buttonblue: {
    color: '#21c5e4',
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
    color:'#ffffff',
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
    backgroudImgStyle:
    {
      flex: 1,
      resizeMode:'cover',
    },

    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    textContainer: {

        color:'#ffffff',
        position: 'absolute',
        top: 0,
        padding:20,
        bottom: 0,
        left: 0,
        right: 0
    },
    textDesc: {
      fontSize:20,
      padding:10,
      borderRadius:15,
        color:'#474747',
        backgroundColor:'rgba(255, 255, 255, 0.85)',
},

    });
    return(
      <View style={ style.container }>
        <ImageBackground source={{uri: 'http://www.obc.co.nz/media/12202/sil_12.jpg'}} style={style.backgroundImage} >
              <View style={ style.textContainer }>
                              <Text  style={ style.textDesc }>Outboard Boating Club of Auckland
                                      At the OBC, we love boating as much as you do! That's why you'll
                                      find all the facilities you need to make your boating experience
                                      easy and pleasurable from fueling up to wash down  in our convenient
                                       Auckland location.
                              </Text>
              </View>
        </ImageBackground>




          <View style={style.footer}>

            <Button
                onPress ={() => this.props.navigation.navigate("News")}
                style={style.buttonblue}
                title="News"
                color= "#21c5e4"
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
                      onPress ={() => this.props.navigation.navigate("Sponsors")}
                      style={style.buttonblue}
                      title="Sponsors"
                      />
                      <Button
                        onPress ={() => this.props.navigation.navigate("Sponsors")}
                        style={style.buttonblue}
                        title="   "
                        />
                </View>

      </View>
);

  }
}
