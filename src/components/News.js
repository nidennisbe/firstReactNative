import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  Button,
  StyleSheet,
  ListView,
  WebView,
} from 'react-native';

export default class News extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) =>r1 !== r2});
    this.state = {
    dataSource:ds.cloneWithRows(['Link 1','Link 2','Link 3','Link 4','Link 5']),
    };
  }

  static navigationOptions = {
        title: 'News',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#e9c724',
          borderBottomColor: '#ffffff',
        },
        headerTitleStyle: {
          fontSize: 18,
        },
    };

  render() {
    const style = StyleSheet.create({
    text: {
      textAlign: 'center',
      color:'blue',
      fontWeight:'bold',
      alignItems:'center',
      fontSize:28,
      justifyContent: 'center',
    },
    container: {
      flex:1,
      backgroundColor: '#fefefe',
    }
});
      return(
          <View style={style.container} >
            <WebView source={{uri: 'http://www.obc.co.nz/blog/'}}
            style={{marginTop:20}}
            />

          </View>

      );
  }

}
