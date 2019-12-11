import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image, Dimensions } from 'react-native';
import { Container, Content, Button } from 'native-base'
import CardComponent from '../pages/CardComponent';


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
          { width: (width) / 2.04 },
          { height: (width) / 2.4 },
          { marginBottom: 5 },
          index % 3 !== 0 ? { paddingLeft: 5 } : { paddingLeft: 5 },
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
      <Container style={{ flex: 1, backgroundColor: 'white' }}>
       
        <Content>
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
    backgroundColor: "#4f4f4f",
    marginLeft:10
  },
  buttonText: {
    color: 'white',
  },
})