import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';

import {
  View,
  Text,
  Alert,
  Image,
  Button,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
  AppRegistry,
} from 'react-native';

export default class Camera extends Component {
  state = {

      ImageSource: null,

    };
  static navigationOptions = {
        title: 'Camera',
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
    const { region } = this.props;
    console.log(region);
    const style = StyleSheet.create({

      text:{
        fontWeight:'900',
        color:'white',
      },
    ImageContainer: {
      borderRadius: 10,
      width: 100,
      height: 80,
      borderColor: '#9B9B9B',
      borderWidth: 1 / PixelRatio.get(),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ddae39',

    },
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    height: '30%',
    }

});
      return(
          <View style={style.container}>
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
              <View style={style.ImageContainer}>

                   { this.state.ImageSource === null ? <Text style={style.text}>Open Camera</Text> :
                     <Image style={styles.ImageContainer} source={this.state.ImageSource} />
                   }
              </View>
           </TouchableOpacity>
          </View>

      );
  }

  selectPhotoTapped() {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true
          }
        };

        ImagePicker.showImagePicker(options, (response) => {
       console.log('Response = ', response);

       if (response.didCancel) {
         console.log('User cancelled photo picker');
       }
       else if (response.error) {
         console.log('ImagePicker Error: ', response.error);
       }
       else if (response.customButton) {
         console.log('User tapped custom button: ', response.customButton);
       }
       else {
         let source = { uri: response.uri };

         // You can also display the image using data:
         // let source = { uri: 'data:image/jpeg;base64,' + response.data };

         this.setState({

           ImageSource: source

         });
       }
     });

}


}
