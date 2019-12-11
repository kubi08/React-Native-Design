import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image, Dimensions,TouchableHighlight } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button } from 'native-base'
import CardComponent from './CardComponent';


var images = [
  require('../assets/profilresmi.jpg'),
  require('../assets/res.jpg'),
  require('../assets/profilresmi.jpg'),
  require('../assets/resi.jpg'),
  require('../assets/resi.jpg'),
  require('../assets/res.jpg'),
  require('../assets/profilresmi.jpg'),
  require('../assets/resi.jpg'),
  require('../assets/res.jpg'),
  require('../assets/resi.jpg'),
  require('../assets/res.jpg'),
]

var { width, height } = Dimensions.get('window');
export default class ProfileTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  segmentClicked = (index) => {
    this.setState({ activeIndex: index });
  }
  renderSectionOne = () => {
    return images.map((image, index) => {
      return (
        <View key={index} style={[
          { width: (width) / 3 },
          { height: (width) / 3 },
          { marginBottom: 2 },
          index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 },
        ]}>
          <Image style={{ flex: 1, width: undefined, height: undefined }}
            source={image}
          />
        </View>
      )
    })
  }

  renderSection = () => {
    if (this.state.activeIndex == 0) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionOne()}
        </View>
      )
    } else if (this.state.activeIndex == 1) {
      return (
        <View>
          <CardComponent style={{ shadowOffset: { height: 0, width: 0 }, shadowOpacity: 0, elevation: 0 }} imageSource="1" likes="100" />
          <CardComponent style={{ shadowOffset: { height: 0, width: 0 }, shadowOpacity: 0, elevation: 0 }} imageSource="2" likes="200" />
          <CardComponent style={{ shadowOffset: { height: 0, width: 0 }, shadowOpacity: 0, elevation: 0 }} imageSource="3" likes="300" />
        </View>
      )
    }
  }

  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: 'white', marginTop:25 }}>
       
        <Content>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={require('../assets/profilresmi.jpg')}
                  style={{ width: 90, height: 90, borderRadius: 60,marginLeft:20 ,borderColor: '#ffa500', borderWidth: 3 }}
                />
              </View>
              <View style={{ flex: 3 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around',marginTop:10 }}>

                  <View style={{ alignItems: 'center',marginLeft:10 }}>
                    <Text style={{ fontWeight: 'bold',fontSize:19 }}>20</Text>
                    <Text style={{ fontSize: 16 }}>Notlar</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold',fontSize:19 }}>125</Text>
                    <Text style={{ fontSize: 16 }}>Takipçi</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold',fontSize:19 }}>54</Text>
                    <Text style={{ fontSize: 16}}>Takip</Text>
                  </View>
                </View>
               
              </View>
            </View>
            <View style={{ paddingBottom: 10, paddingHorizontal: 10,marginTop:10 }}>
              <Text style={{ fontWeight: 'bold',fontSize:17 }}>Kubilay BEŞLİ</Text>
              <Text style={{ fontSize: 15 }}>React Native Developer</Text>
              <Text style={{ fontSize: 15 }}>not-boss.com</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.props.navigation.navigate("AnaRouterEk")} >
            <Text style={styles.buttonText}>Profili Düzenle</Text>
          </TouchableHighlight>
          </View>
          </View>

          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
              <Button transparent onPress={() => this.segmentClicked(0)} active={this.state.activeIndex == 0}>
              <Image source={require('../assets/collage.png')}
              style={{ width: 21, height: 21,}}
            />
              </Button>
              <Button transparent onPress={() => this.segmentClicked(1)} active={this.state.activeIndex == 1}>
              <Image source={require('../assets/list.png')}
              style={{ width: 21, height: 21}}
            />
              </Button>
            
              <Button transparent onPress={() =>  this.segmentClicked(3)} active={this.state.activeIndex == 3}>
              <Image source={require('../assets/tag.png')}
              style={{ width: 21, height: 21 }}
            />
              </Button>
            </View>
          </View>
          {this.renderSection()}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  androidHeader: {
    ...Platform.select({
      android: {
        backgroundColor: 'white',
        shadowOpacity: 0,
        shadowColor: 'white',
        shadowOffset: { height: 0, width: 0 }, shadowOpacity: 0, elevation: 0
      }
    })
  },
  androidHeaderTitle: {
    ...Platform.select({
      android: {
        alignItems: 'flex-end'
      }
    })

  },
  a: {

  },
  buttonContainer: {
    height:39,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:2,
    width:340,
    borderRadius:15,
  },
  sendButton: {
    backgroundColor: "#5a5a5a",
    marginLeft:10
  },
  buttonText: {
    color: 'white',
  },
})