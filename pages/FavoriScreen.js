import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class ProfileScreen extends Component {
 
  render() {
    return (
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

          <View style={styles.body}>
            <View style={styles.bodyContent}>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={require('../assets/books.png')}/>
                <Text style={styles.info}>Kitaplar</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={require('../assets/istatislik.png')}/>
                <Text style={styles.info}>İstatislik</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={require('../assets/kitap.png')}/>
                <Text style={styles.info}>Notlar</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={require('../assets/analitik.png')}/>
                <Text style={styles.info}>Analitik</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={require('../assets/not.png')}/>
                <Text style={styles.info}>Web</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={require('../assets/monitor.png')}/>
                <Text style={styles.info}>Bilgi</Text>
              </View>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#5a5a5a",
  },
  headerContent:{
    padding:50,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
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
  