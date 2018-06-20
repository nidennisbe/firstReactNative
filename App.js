/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { StackNavigator} from 'react-navigation';
import Home from './src/components/Home';
import News from './src/components/News';
import Camera from './src/components/Camera';
import Sponsors from './src/components/Sponsors';
import Login from './src/components/Login';
import Weather from './src/components/Weather';
import Map from './src/components/Map';
import IpCamera from './src/components/IpCamera';


import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const Navigation = StackNavigator({
  Home:{
    screen: Home,
  },
  News:{
    screen: News,
  },
  Camera:{
    screen: Camera,
  },
  Sponsors:{
    screen: Sponsors,
  },
  Login:{
    screen: Login,
  },
  Weather: {
    screen: Weather,
  },
  Map: {
    screen: Map,
  },
  IpCamera: {
    screen: IpCamera,
  },

})
export default Navigation;
