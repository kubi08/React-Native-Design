import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {  createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "../screens/LoadingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";

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
 

const AppStack = createStackNavigator({
    Home: HomeScreen
});

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
});

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);
