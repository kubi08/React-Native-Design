import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image} from 'react-native';
import { Container, Content, Button } from 'native-base'
import Liste from '../taylorVeri/Liste';

export default class ProfileTab extends Component {
  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: 'white', }}>
       
        <Content>
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#ffffff' }}>
            
              <Button transparent onPress={() =>console.log('a')}>
              <Image source={require('../assets/searcha.png')}
              style={{ width: 23, height: 23,marginRight:15,marginTop:12}} />
              <Text style={{fontSize:18,marginTop:12}}>Not ara</Text>
              
              </Button>
            
              <Button transparent onPress={() =>console.log('b')}>
              <Image source={require('../assets/homer.png')}
              style={{ width: 23, height: 23,marginRight:15,marginTop:12}} />
              <Text style={{fontSize:18,marginTop:12}}>Keşfet</Text>
              </Button>
            </View>
            <View style={{ width: '100%', height: 1, backgroundColor: '#2f2f2f',marginTop:15}} />
          </View>
          <Liste></Liste>
          
        </Content>
      </Container>
    );
  }
}

