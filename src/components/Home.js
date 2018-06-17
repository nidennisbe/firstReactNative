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
  Card,
} from 'react-native';


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

static navigationOptions = { header: null };


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
    color:'grey',
    fontWeight:'100',
    alignItems:'center',
    fontSize:12,
    marginLeft:100,
    justifyContent: 'center',
    },

    inputTextSection: {
      marginTop:120,
      padding: 20,
      width:220,
      borderRadius: 15,
      backgroundColor:'rgba(255, 255, 255, 0.85)',
    },
    ImageBackground: {
      flex: 1,
      resizeMode: 'stretch',
      alignItems:'center',
      justifyContent:'center',
    },
    logo: {
        width:120,
        alignItems:'center',
        justifyContent:'center',
    },


    });
    return(
      <View style={style.mainviewStyle}>

        <ImageBackground source={{uri: 'http://www.obc.co.nz/media/12202/sil_12.jpg'}}
               style={style.ImageBackground}>
        <View style={style.inputTextSection}>
          <ImageBackground source={{uri: 'http://www.obc.co.nz/images/logo.png'}} style={style.logo} ></ImageBackground>
           <TextInput
             style={{height: 50,color:'black',}}
             placeholderTextColor="#737373"
             placeholder="Username"
             onChangeText={(text) => this.setState({text})}
           />

         <TextInput
             style={{height: 50,color:'black',}}
             placeholderTextColor="#737373"
             secureTextEntry={true}
             placeholder="Password"
             onChangeText={(text) => this.setState({text})}
           />
         <View style={{padding: 10,alignItems: 'center',justifyContent:'center'}}>


           <Button
               onPress ={() => this.props.navigation.navigate("Login")}
               style={style.buttonblue}
               title="Sign in"
               color= "#EC894D"
               accessibilityLabel="Learn more about this purple button"
             />
         </View>

           <Text style={{padding: 10, fontSize: 22}}>
             {this.state.text.split(' ').map((word) => word && this.state.text).join(' ')}
           </Text>
         </View>

            <View style={style.footer}>

            <Text style={style.footerText}>Have not got any account? Sign up </Text>
            </View>
          <View style={{ alignSelf:'stretch',alignItems: 'center',flex: 1, flexDirection: 'row'}}>

            </View>
           </ImageBackground>


      </View>
);

}
}
