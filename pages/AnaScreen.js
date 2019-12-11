import React, { Component } from 'react';
import { View, Image, ScrollView,TouchableHighlight,StyleSheet} from 'react-native';
import { Container, Content, Thumbnail,} from 'native-base';
import Profil from '../signProcess/AnaProfil';

export default class AnaScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {};
     }

    static navigationOptions = {
      
      title:'Not Ekranı',
      headerStyle: {height: 100},
      headerTitleStyle:{

          fontSize:21,
          textAlign: "center",
          flex: 1,
      },
      titleStyle: {
        fontFamily: 'arial'
      },
      tabBarVisible: false,
      headerStyle:{

          backgroundColor:'#5a5a5a',
          borderBottomColor: 'transparent',
      },
      headerTintColor: 'white',
      height:50,
      headerBackTitle: null,
      headerLeft: (
        <TouchableHighlight >
            <Image style={{ width: 21, height: 21 ,marginLeft:20}}
                source={require('../assets/searchbey.png')}
            />
        </TouchableHighlight>
    ),
    headerRight: (
      <TouchableHighlight >
          <Image style={{ width: 21, height: 21 ,marginRight:20}}
              source={require('../assets/filledbey.png')}
          />
      </TouchableHighlight>
  ),
  
    };
    render() {
        return (
            <Container style={{shadowOffset: { height: 0, width: 0 },shadowOpacity: 0,elevation:0}}>
                <Content style={{shadowOffset: { height: 0, width: 0 },shadowOpacity: 0,elevation:0}}>
                    <View style={{ height: 95 }}>
                        <View style={{ flex: 1 }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', paddingStart: 10, paddingEnd: 10 }}>
                                <Thumbnail
                                    style={{ marginHorizontal: 6, borderColor: '#ffa500', borderWidth: 3 }}
                                    source={require("../assets/profilresmi.jpg")} />
                                <Thumbnail
                                    style={{ marginHorizontal: 6, borderColor: '#ffa500', borderWidth: 3 }}
                                    source={require("../assets/res.jpg")} />
                                <Thumbnail
                                    style={{ marginHorizontal: 6, borderColor: '#ffa500', borderWidth: 3 }}
                                    source={require("../assets/res.jpg")} />
                                 <Thumbnail
                                    style={{ marginHorizontal: 6, borderColor: '#ffa500', borderWidth: 3 }}
                                    source={require("../assets/profilresmi.jpg")} />
                                <Thumbnail
                                    style={{ marginHorizontal: 6, borderColor: '#ffa500', borderWidth: 3 }}
                                    source={require("../assets/profilresmi.jpg")} />
                                    <Thumbnail
                                    style={{ marginHorizontal: 6, borderColor: '#ffa500', borderWidth: 3 }}
                                    source={require("../assets/res.jpg")} />
                            </ScrollView>
                        </View>
                    </View>
                  <Profil></Profil>
                </Content>
            </Container>
            
        );
    }
}
const styles = StyleSheet.create({
  container:{
  backgroundColor:'#ffffff'
  },

  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:5,
  },
  textInfo:{
    fontSize:13,
    marginTop:50,
    color: "#000000",
  },
  bodyContent:{
   
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menuBox:{
    backgroundColor: "#f8f8f8",
    width:150,
    height:150,
    alignItems: 'center',
    justifyContent: 'center',
    margin:14,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
  },
  icon: {
    width:60,
    height:60,
  },
  info:{
     marginTop:30,
    fontSize:18,
    color: "#000000",
  }
});


