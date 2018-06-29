import React, { Component } from 'react';
import Video from 'react-native-video';



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
          backgroundColor: '#3f38c2',
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
  source={{uri: "http://cdn.goluk.cn/video/t1_2.mp4"}} // Can be a URL or a local file.
  rate={1.0}                   // 0 is paused, 1 is normal.
  volume={1.0}                 // 0 is muted, 1 is normal.
  muted={false}                // Mutes the audio entirely.
  paused={false}               // Pauses playback entirely.
  resizeMode="cover"           // Fill the whole screen at aspect ratio.
  repeat={true}                // Repeat forever.
  playInBackground={false}     // Audio continues to play when aentering background.
  playWhenInactive={false}     // [iOS] Video continues to play whcontrol or notification center are shown.
  onLoadStart={this.loadStart} // Callback when video starts to load
  onLoad={this.setDuration}    // Callback when video loads
  onProgress={this.setTime}    // Callback every ~250ms with currentTime
  onEnd={this.onEnd}           // Callback when playback finishes
  onError={this.videoError}    // Callback when video cannot be loaded
  style={style.backgroundVideo}
/>
        </View>



      );
  }

}
