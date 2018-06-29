import React, { Component } from 'react';
import { Card, CardItem, Right, Icon, Container, Header, Content, List, ListItem, Text } from 'native-base';

import {
  View,
  Alert,
  Image,
  Button,
  StyleSheet,
  WebView,
  Linking,
} from 'react-native';

export default class Sponsors extends Component {

  static navigationOptions = {
        title: 'Sponsors',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#3f38c2',
          borderBottomColor: '#ffffff',
          borderBottomWidth: 3,
        },
        headerTitleStyle: {
          fontSize: 18,
        },
    };
  render() {
    const uri = 'http://stackoverflow.com/questions/35531679/react-native-open-links-in-browser';
    const { region } = this.props;
    console.log(region);
    const style = StyleSheet.create({
    textSponsorHeading: {
      textAlign: 'center',
      color:'grey',
      fontWeight:'bold',
      alignItems:'center',
      fontSize:22,
      justifyContent: 'center',
    },
    map: {
   ...StyleSheet.absoluteFillObject,
 },
 container: {
    backgroundColor:'#636564',
    flex:1,
  },

   buttonLink: {
     color:'#242424',
   }
});
      return(

      <Container>
        <Content>
          <List>
            <ListItem itemHeader first>
              <Text>Links</Text>
            </ListItem>
            <ListItem onPress={()=> {Linking.openURL('http://www.obc.co.nz/')}} >
              <Icon active name="link" />
              <Text>  Link to home page</Text>
            </ListItem>
            <ListItem last onPress={()=> {Linking.openURL('http://www.obc.co.nz/about-us/history/')}} >
              <Icon active name="link" />
              <Text>  Link to history</Text>
            </ListItem>
            <ListItem itemHeader>
              <Text>Social Media</Text>
            </ListItem>
          </List>
        </Content>
        <Content>
          <Card>
              <CardItem button onPress={()=> {Linking.openURL('http://www.google.com')}}>
                    <Icon active name="logo-googleplus" />
                    <Text>Google Plus</Text>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
               </CardItem>

               <CardItem button onPress={()=> {Linking.openURL('http://www.facebook.com')}}>
                     <Icon active name="logo-facebook" />
                     <Text>Facebook</Text>
                     <Right>
                       <Icon name="arrow-forward" />
                     </Right>
                </CardItem>

                <CardItem button onPress={()=> {Linking.openURL('http://www.instagram.com')}}>
                    <Icon active name="logo-instagram" />
                    <Text>Instagram</Text>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                 </CardItem>
          </Card>
          </Content>

      </Container>



      );


  }

}
