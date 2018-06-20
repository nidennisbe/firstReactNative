import React, { Component } from 'react';
import Video from 'react-native-af-video-player';



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

  constructor(props) {
    super(props);

}

  static navigationOptions = {
        title: 'Stream LiveCam',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#2F95D6',
          borderBottomColor: '#ffffff',
          borderBottomWidth: 3,
        },
        headerTitleStyle: {
          fontSize: 18,
        },
        container: {
          flex:1,
        }
    };

    play() {
         this.video.play()
         this.video.seekTo(25)
       }

       pause() {
         this.video.pause()
       }

  render() {
    const url = 'http://cdn.goluk.cn/video/t1_2.mp4'
    const title = 'testing live streaming'

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
    },
    backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

});
      return(
        <View style={style.container}>
          <Video
            autoPlay
            ref={(ref) => { this.video = ref }}
            url={url}
            title={title}
            />
            <Button onPress={() => this.play()}
               title="Play">
            </Button>
            <Button onPress={() => this.pause()}
                   title="Pause">
            </Button>
        </View>



      );
  }

}
