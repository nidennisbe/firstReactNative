import React, { Component, PropTypes } from 'react';
import { StackNavigator } from 'react-navigation';
import { Title, Body, Thumbnail, Left, Badge,Card,CardItem, Item, Right, Input,Drawer,View, Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';


import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Linking,
  TextInput,
} from 'react-native';



export default class Home extends Component {
  static navigationOptions = { header: null };


  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
    state = { currentUser: null }


  componentDidMount() {

}


    handleLogout = () => {
    
  }




  render() {
    const { currentUser } = this.state

    const style = StyleSheet.create({
    inputTextSection: {
      padding: 20,
      width:220,
      borderRadius: 5,
      backgroundColor:'#ffffff',
      marginTop:20,
    },

    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    textContainer: {
        marginTop:40,
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
                <Content padder>
                <Card>
              <CardItem header bordered>
                <Text>WELCOME TO OBC AUCKLAND</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                    At the OBC, we love boating as much as you do!
                    That's why you'll find all the facilities you need
                    to make your boating experience easy and pleasurable
                    - from fueling-up to wash-down - in our convenient Auckland location.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            </Content>
              </View>
              <Container>
                <Header>
                    <Body iconLeft>
                        <Title>Welcome OBC</Title>
                    </Body>
                  <Right>
                   <Button transparent onPress={this.handleLogout}>
                     <Icon name='log-out' />
                   </Button>
                 </Right>
                </Header>
       <Content />
       <Footer>
         <FooterTab style = {style.bgFooter}>
           <Button badge vertical
            onPress ={() => this.props.navigation.navigate("News")}>
             <Badge ><Text>2</Text></Badge>
             <Icon name="document" />
               <Text>News</Text>
           </Button>
           <Button vertical
             onPress ={() => this.props.navigation.navigate("Weather")}>
             <Icon name="cloud" />
              <Text>Weath.</Text>
           </Button>
           <Button vertical active
              onPress ={() => this.props.navigation.navigate("Map")}>
             <Icon active name="map" />
             <Text>Map</Text>
           </Button>
           <Button vertical
             onPress ={() => this.props.navigation.navigate("IpCamera")}>
             <Icon name="camera" />
             <Text>Cam</Text>
           </Button>
           <Button vertical
             onPress ={() => this.props.navigation.navigate("Sponsors")}>
             <Icon name="link" />
             <Text>Link</Text>
           </Button>
         </FooterTab>
       </Footer>
     </Container>
        </ImageBackground>
      </View>
);

  }
}
