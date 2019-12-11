
import React from 'react';
import { Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import AnaScreen from '../pages/AnaScreen';
import SettingsScreen from '../pages/SettingsScreen';
import EkleeScreen from '../pages/EkleScreen';
import ProfileScreen from '../pages/ProfileScreen';
import FavoriScreen from '../pages/FavoriScreen';

const AnaStack = createStackNavigator(
  {
    NotEkranı: { screen: AnaScreen},
    
  },
  
);


const SettingsStack = createStackNavigator(
  {
    Ayarlar: { screen: SettingsScreen }
  },

  {
    navigationOptions: {
      header: null },
    headerMode: 'none'
  },
);
const FavoriStack = createStackNavigator(
  {

    Favori: { screen: FavoriScreen }

  
  },
  
  {
    navigationOptions: {
      header: null,
    },
    headerMode: 'none'
  },

);
const EkleeStack = createStackNavigator(
  {
    Eklee: { screen: EkleeScreen }
  },
  {
    navigationOptions: {
      header: null,
    },
    headerMode: 'none'
  },
  
);
const ProfileStack = createStackNavigator(
  {

    
    Profil: { screen: ProfileScreen },
  },
  {
    navigationOptions: {
      header: null,
    },
    headerMode: 'none',
    
  },
  
);
const App = createBottomTabNavigator(
  {
    NotEkranı:{screen:AnaStack},
    Ara: { screen: EkleeStack },
    Ekle: { screen: SettingsStack },
    Profil: { screen: ProfileStack },
    Favori: { screen: FavoriStack },
  },

 
 {
  defaultNavigationOptions: ({ navigation }) => ({
    
    tabBarIcon: () => {
      const { routeName } = navigation.state;
      if (routeName === 'NotEkranı'){
        return (
          <Image
            source={ require('../assets/homer.png') }
            style={{ width: 23, height: 23, }} />
        );
      }
    else if (routeName === 'Ekle'){
      
        return (
          <Image
            source={ require('../assets/plus.png') }
            style={{ width: 26, height: 26}} />
        );
      }
      else if (routeName === 'Profil'){
        return (
          <Image
            source={ require('../assets/usera.png') }
            style={{ width: 23, height: 23 }} />
        );
      }
      else if (routeName === 'Ara'){
        return (
          <Image
            source={ require('../assets/searcha.png') }
            style={{ width: 23, height: 23 }} />
        );
      }
      else if (routeName === 'Favori'){
        return (
          <Image
            source={ require('../assets/heartaa.png') }
            style={{ width: 23, height: 23 }} />
        );
      }
      
    },
  }),
  tabBarOptions: {
    activeTintColor: '#ffffff',
    inactiveTintColor: '#000000',
    style: {
      ...Platform.select({
          android: {
              backgroundColor: '#ffffff',
              height:55,
              border: '#000000'
          }
      })
  },
  labelStyle: {        
    fontSize: 13,        
    lineHeight: 13,        
    fontFamily: "arial"      
   },
  },
},


);
export default createAppContainer(App);