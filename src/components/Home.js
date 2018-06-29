import React, { Component, PropTypes } from 'react';
import { StackNavigator } from 'react-navigation';
import {RkButton,RkTheme,RkTextInput} from 'react-native-ui-kitten';
import { Spinner,Toast, Drawer,View, Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';




import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TextInput,
  Card,
  ActivityIndicator,
} from 'react-native';


RkTheme.setType('RkButton', 'icon', {
  fontSize: 24,
  hitSlop: {top: 5, left: 5, bottom: 5, right: 5}
});

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {text: '',password:'',errorMessage:null,showProgress:false};
  }

  handleLogin = () => {
    const { text, password,textInput } = this.state
      fetch('https://system7.co.nz/authtest', {
        method: 'POST',
        headers: {
          'username':this.state.text,
          'password':this.state.password
        },
      })
      .then((response) => response.json())
      .then((rpdata) => {
          if (rpdata.status==='Success'){
            Alert.alert("Welcome to OBC! Your fullname is"+rpdata.user.firstName+rpdata.user.lastName+
            "and ID is: "+rpdata.user.userid)
            this.props.navigation.navigate("Login")
        } else {
          Alert.alert(rpdata.status,rpdata.message);
        }

      })
      .done();
}

static navigationOptions = { header: null };


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
    marginTop:30,
    padding: 20,
    width:340,
    borderRadius: 15,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(73, 73, 73, 0.49)',
    },
    ImageBackground: {
      flex: 1,
      resizeMode: 'cover',
      alignItems:'center',
      justifyContent:'center',
    },
    logo: {
        marginBottom:30,
        width:170,
        height:130,

    },


    });
    return(

      <View style={style.mainviewStyle}>

        <ImageBackground source={{uri: 'http://www.obc.co.nz/media/5400/banner3.jpg'}}
               style={style.ImageBackground}>
        <View style={style.inputTextSection}>
          <Image source={{uri: 'http://www.obc.co.nz/images/logo.png'}} style={style.logo} ></Image>
            <RkTextInput
               labelStyle={{color: 'gray'}}
               placeholder="Username"
               onChangeText={(text) => this.setState({text})}
               value={this.state.text}
               ref={input => { this.textInput = input }}
               inputStyle={{
               paddingLeft:10,
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
                 ref={input => { this.textInput = input }}
                 inputStyle={{
                  paddingLeft:10,
                  borderRadius:50,
                  backgroundColor: 'rgba(255, 255, 255, 0.89)',
                  color: 'black',
                }}/>
              <ActivityIndicator animating={this.state.showProgress} size="large"/>

         </View>

         <View style={{padding: 10,alignItems: 'center',justifyContent:'center'}}>
           <Button rounded darkblue iconLeft
            onPress ={this.handleLogin}>
            <Icon name='md-log-in' />
            <Text>Login</Text>
          </Button>
         </View>


            <View style={style.footer}>

            <Text style={style.footerText}
              onPress ={() => this.props.navigation.navigate("SignUp")}>Have not got any account? Sign up </Text>
            </View>
          <View style={{ alignSelf:'stretch',alignItems: 'center',flex: 1, flexDirection: 'row'}}>
            </View>
           </ImageBackground>
      </View>
);

}

}
