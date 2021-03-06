import React, { Component } from 'react';
 
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity,Alert,Button,TextInput} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, Header} from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation'
import Kayit from './signProcess/RegisterScreen';
import Giris from './signProcess/LoginScreen';
import Loading from './src/Loading'
import SignUp from './src/SignUp'
import Login from './src/Login'
import Main from './src/Main'

import * as firebase from "firebase";



 let firebaseConfig = {
    apiKey: "AIzaSyA0WxpvkiIJb8wXKi3bscvLQx69N-BvJTw",
    authDomain: "kubi-c9456.firebaseapp.com",
    databaseURL: "https://kubi-c9456.firebaseio.com",
    projectId: "kubi-c9456",
    storageBucket: "kubi-c9456.appspot.com",
    messagingSenderId: "884546475947",
    appId: "1:884546475947:web:b6f5ad9f6f2495b1a664ee",
    measurementId: "G-1KMJH0R8SP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  class AnaEkran extends Component
{
  
  constructor(props) {
    super(props);
   this.state = {
    
      isVisible : true,
   
    }
  }
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
 
  Hide_Splash_Screen=()=>{
 
    this.setState({ 
      isVisible : false 
 
    });
 
  }
 
  componentDidMount(){
 
    var that = this;
 
    setTimeout(function(){
 
      that.Hide_Splash_Screen();
 
    }, 1000);
  }
    render()
    {
        let Splash_Screen = (
            <View style={styles.SplashScreen_RootView}>
                <View style={styles.SplashDesign}>
                </View>
                <Image  source={ require('./assets/splash.jpeg') } style={{width:'100%', height: '120%', resizeMode: 'contain'}} />
            </View> 
            )
 
        return(
          <View style={styles.MainContainer} >
          
          
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('./assets/profilresmi.jpg')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Not-BOSS</Text>
              <Text style={styles.info}>Üniversite Ders Notları</Text>
              <Text style={styles.description}>Üniversite öğrencilerinin, istedikleri notları bulup istedikleri zaman mobilden ders çalışabilecekleri platformdur.</Text>
              
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate("Kayit")}>
                <Text style={{color:'#ffffff'}}>Kaydol</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}  onPress={() => this.props.navigation.navigate("Giris")}>
                <Text style={{color:'#ffffff'}}>Giriş</Text> 
              </TouchableOpacity>
            </View>
        </View>
  
        {
          (this.state.isVisible === true) ? Splash_Screen : null
        }

     
    </View>
        );
    }
}
const RootStack = createStackNavigator(
  {
    AnaEkran:{ screen: AnaEkran},
    Kayit:  { screen: Kayit},
    Giris:   { screen: Giris },
    Loading:{ screen: Loading},
    SignUp:  { screen: SignUp},
    Login:   { screen: Login },
    Main:   { screen: Main },
  },
  {
    navigationOptions: {
      header: null,
    },
    headerMode: 'none'
  },

  {
      initialRouteName: 'Loading',
  },
  
 
  );
  
export default createAppContainer(RootStack);
const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex:1,
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
   
    SplashScreen_RootView:
    {
        justifyContent: 'center',
        flex:1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffb200',
        
    },
 
    SplashDesign:
    {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffb200',
        flex:1,
        margin: 2,
    },
 
    TouchableOpacity_Style:{
 
        width:25, 
        height: 25, 
        top:9, 
        right:9, 
        position: 'absolute'
 
    },
    header:{
      backgroundColor: "#5a5a5a",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:20,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:17,
      color: "#696969",
      marginTop:8
    },
    description:{
      fontSize:15,
      color: "#696969",
      marginTop:8,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:300,
      borderRadius:20,
      backgroundColor: "#5a5a5a",
    },
 
});
