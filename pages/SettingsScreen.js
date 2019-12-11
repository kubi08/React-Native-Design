
import React, { Component } from 'react'; 
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Liste from '../taylorVeri/Liste'; 
class HamburgerIcon extends Component {
 
  toggleDrawer = () => {
 
    console.log(this.props.navigationProps);
    this.props.navigationProps.toggleDrawer();
 
  }
 
  render() {
 
    return (
      <View style={{ flexDirection: 'row' }}>
 
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
 
          <Image
          source={ require('../assets/leftmenu.png') }
            style={{ width: 20, height: 20, marginLeft: 15 }}
          />
 
        </TouchableOpacity>
 
      </View>
 
    );
 
 
  }
}
 
class Custom_Side_Menu extends Component {
 
  render() {
 
    return (
 
      <View style={styles.sideMenuContainer}>
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
            <Image style={styles.avatar}
            source={require('../assets/profilresmi.jpg')}/>
            <Text style={styles.name}>
              Kubilay BEŞLİ
            </Text>
        </View>
      </View>
  </View>
      
 
        <View style={{width: '100%'}}>
 
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
 
              <Image source={require('../assets/homer.png')}
              style={styles.sideMenuIcon} />
              
              <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('First') }} > Not Ekranı </Text>
 
            </View>
            <View style={{ width: '100%', height: 1, backgroundColor: '#dcdcdc', marginTop: 15}} />
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
 
              <Image source={require('../assets/search.png')}
              style={styles.sideMenuIcon} />
 
              <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Second') }} > Not Ara </Text>
 
            </View>
            <View style={{ width: '100%', height: 1, backgroundColor: '#dcdcdc', marginTop: 15}} />
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
 
              <Image source={require('../assets/plus.png')}
              style={styles.sideMenuIcon} />
 
              <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Third') }} > Not Ekle </Text>
 
            </View>
            <View style={{ width: '100%', height: 1, backgroundColor: '#dcdcdc', marginTop: 15}} />
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
 
              <Image source={require('../assets/usera.png')}
              style={styles.sideMenuIcon} />
 
              <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Third') }} > Profil Ekranı </Text>
 
            </View>

            <View style={{ width: '100%', height: 1, backgroundColor: '#dcdcdc', marginTop: 15}} />

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
 
              <Image source={require('../assets/heartaa.png')}
              style={styles.sideMenuIcon} />
 
              <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Third') }} >Favori Ekranı </Text>
 
            </View>
            <View style={{ width: '100%', height: 1, backgroundColor: '#dcdcdc', marginTop: 15}} />
       </View>
 
 
      </View>
    );
  }
}
 
 
class MainActivity extends Component {
 
  constructor(props) {
 
    super(props);
 
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
 
  }
 
  render() {
    return (
 
      <View style={styles.MainContainer}>
 
        <Text style={{ fontSize: 23 }}> Not Ekranı </Text>
 
      </View>
    );
  }
}
 
class SecondActivity extends Component {
 
  constructor(props) {
 
    super(props);
 
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
 
  }
 
  render() {
    return (
 
      <View style={styles.MainContainer}>
 
        <Text style={{ fontSize: 23 }}> Not Ara </Text>
 
      </View>
    );
  }
}
 
class ThirdActivity extends Component {
 
  constructor(props) {
 
    super(props);
 
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
 
  }
 
  render() {
    return (
 
      <View style={styles.MainContainer}>
 
        <Text style={{ fontSize: 23 }}> Not Ekle </Text>
 
      </View>
    );
  }
}
 
const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: MainActivity,
    navigationOptions: ({ navigation }) => ({
      title: 'Not Ekranı',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#5a5a5a'
      },
      headerTintColor: '#fff',
    })
  },
});
 
 
const SecondActivity_StackNavigator = createStackNavigator({
  Second: {
    screen: SecondActivity,
    navigationOptions: ({ navigation }) => ({
      title: 'Not Ara',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#5a5a5a'
      },
      headerTintColor: '#fff',
    })
  },
});
 
 
const ThirdActivity_StackNavigator = createStackNavigator({
  Third: {
    screen: ThirdActivity,
    navigationOptions: ({ navigation }) => ({
      title: 'Not Ekle',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#5a5a5a'
      },
      headerTintColor: '#fff',
    })
  },
});
 
export default MyDrawerNavigator = createDrawerNavigator({
  MainStack: {
    screen: FirstActivity_StackNavigator
  },
 
  SecondStack: {
    screen: SecondActivity_StackNavigator
  },
 
  ThirdStack: {
    screen: ThirdActivity_StackNavigator
  }
},
  {
    contentComponent: Custom_Side_Menu,
    drawerWidth: Dimensions.get('window').width - 110,
  });
 
 
const styles = StyleSheet.create({
 
  MainContainer: {
 
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
 
  },
 
  sideMenuContainer: {
 
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
 
  sideMenuProfileIcon:
  {
    resizeMode: 'center',
    width: 150, 
    height: 150, 
    borderRadius: 150/2
  },
 
  sideMenuIcon:
  {
    resizeMode: 'center',
    width: 25, 
    height: 25, 
    marginRight: 18,
    marginLeft: 18
    
  },
 
  menuText:{
 
    fontSize: 16,
    color: '#222222',
    
  },
  header:{
    backgroundColor: "#5a5a5a",
  },
  headerContent:{
    padding:64,
   
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:20,
    color:"#FFFFFF",
    fontWeight:'500',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:20,
  },
  textInfo:{
    fontSize:13,
    marginTop:30,
    color: "#696969",
  },
  bodyContent:{
    paddingTop:20,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menuBox:{
    backgroundColor: "#DCDCDC",
    width:95,
    height:95,
    alignItems: 'center',
    justifyContent: 'center',
    margin:12,
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
    fontSize:22,
    color: "#696969",
  }
 
});