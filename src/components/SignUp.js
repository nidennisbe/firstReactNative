import React, { Component, PropTypes } from 'react';
import { StackNavigator } from 'react-navigation';
import {RkButton,RkTheme,RkTextInput} from 'react-native-ui-kitten';
import { Drawer,View, Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import firebase from 'react-native-firebase';


import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  ScrollView,
  Card,
} from 'react-native';


RkTheme.setType('RkButton', 'icon', {
  fontSize: 24,
  hitSlop: {top: 5, left: 5, bottom: 5, right: 5}
});

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {email: '', password:'', errorMessage:null};
  }

  handleSignUp = () => {
    const { email, password } = this.state
    if (email =='' || password ==''){
      alert("Please enter your email and password")
    }else {
  firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => this.props.navigation.navigate('Login'))
    .catch(error => this.setState({ errorMessage: error.message }))
  }
}

  static navigationOptions = {
        title: 'Sign up',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#3f38c2',
          borderBottomColor: '#ffffff',
        },
        headerTitleStyle: {
          fontSize: 18,
          color:'#ffffff',
        },
    };


  render() {


    const style = StyleSheet.create({

    mainviewStyle: {
    flex: 1,
    },

    footer: {
    position: 'absolute',
    flex:0.1,
    backgroundColor: '#ffffff',
    left: 0,
    justifyContent:'center',
    right: 0,
    bottom: 0,
    flexDirection:'row',
    height:40,
    alignItems:'center',
    },

    inputTextSection: {
      alignItems:'center',
      justifyContent:'center',
      marginTop:30,
      padding: 20,
      width:340,
      borderRadius: 15,
      backgroundColor:'rgba(73, 73, 73, 0.49)',
    },
    ImageBackground: {
      flex: 1,
      resizeMode: 'cover',
      alignItems:'center',
      justifyContent:'center',
    },
    logo: {
        width:170,
        height:130,
    },


    });
    return(
<View style={style.mainviewStyle}>
 <ImageBackground source={{uri: 'http://www.obc.co.nz/media/5400/banner3.jpg'}}style={style.ImageBackground}>
  <ScrollView>
      <View style={style.inputTextSection}>
          <Image source={{uri: 'http://www.obc.co.nz/images/logo.png'}} style={style.logo} ></Image>

            <RkTextInput
               labelStyle={{color: 'gray'}}
               placeholder="Fullname"
               onChangeText={(text) => this.setState({text})}
               inputStyle={{
                paddingLeft:20,
                borderRadius:50,
                backgroundColor: 'rgba(255, 255, 255, 0.89)',
                color: 'black',
              }}/>

            <RkTextInput
               labelStyle={{color: 'gray'}}
               placeholder="Email"
               onChangeText={(email) => this.setState({email})}
               value={this.state.email}
               inputStyle={{
                paddingLeft:20,
                borderRadius:50,
                backgroundColor: 'rgba(255, 255, 255, 0.89)',
                color: 'black',
              }}/>

              <RkTextInput
                 labelStyle={{color: 'gray'}}
                 placeholder="Password"
                 secureTextEntry={true}
                 onChangeText={(password) => this.setState({password})}
                 value={this.state.password}
                 inputStyle={{
                  paddingLeft:20,
                  borderRadius:50,
                  backgroundColor: 'rgba(255, 255, 255, 0.89)',
                  color: 'black',
                }}/>

        </View>
  </ScrollView>
          <View style={style.footer}>
              <Text onPress ={this.handleSignUp}>Sign Up</Text>
          </View>
 </ImageBackground>
</View>
);
    }

}
