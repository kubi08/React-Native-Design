import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'

// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'

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
  
// create our app's navigation stack
const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App
