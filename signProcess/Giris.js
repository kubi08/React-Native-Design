            
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AnaRouterEk from '../routerAna/AnaRouter';

 class Giris extends Component {
  static navigationOptions = {
    header:null
   };

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Tıklandı "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
            <Image style={styles.avatar}
            source={require('../assets/profilresmi.jpg')}/>

            <Text style={styles.name}>
              Not-BOSS
            </Text>
        </View>
      </View>

      <ScrollView style={styles.body}>
        <View style={styles.bodyContent}>
      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={require('../assets/at.png')}/>
        <TextInput style={styles.inputs}
            placeholder="E-posta"
            placeholderTextColor="#000000"
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}/>
      </View>

      
      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={require('../assets/lock.png')}/>
        <TextInput style={[ styles.inputs]}
            placeholder="Şifre"
            placeholderTextColor="#000000"
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}/>
      </View>

      <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.props.navigation.navigate("AnaRouterEk")} >
        <Text style={styles.buttonText}>Giriş</Text>
      </TouchableHighlight>
      
          
        </View>
    </ScrollView>
  </View>

      
    );
  }
}
const RootStack = createStackNavigator(
  {
    Giris:{ screen: Giris},
    AnaRouterEk:  { screen: AnaRouterEk},
   
  },
  {
    navigationOptions: {
      header: null,
    },
    headerMode: 'none'
  },

  {
      initialRouteName: 'Giris',
  },
 
  );
export default createAppContainer(RootStack);
const styles = StyleSheet.create({
  
  header:{
    backgroundColor: "#5a5a5a",
  },
  headerContent:{
    padding:20,
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:20,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#363636",
  },
  inputContainer: {
    fontSize:20,
    backgroundColor: '#fdfdfd',
    borderRadius:20,
    width:280,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',
    borderColor:'#4f4f4f',
    borderWidth:1

    
},
inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    
   
},
inputIcon:{
  width:25,
  height:25,
  marginLeft:20,
  justifyContent: 'center'
},
buttonContainer: {
  height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:20,
  width:280,
  borderRadius:20,
},
sendButton: {
  backgroundColor: "#5a5a5a",
},
buttonText: {
  color: 'white',
},
}); 