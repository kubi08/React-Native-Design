import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const images = {
            "1": require("../assets/resi.jpg"),
            "2": require("../assets/res.jpg"),
            "3": require("../assets/profilresmi.jpg"),
        }
        return (
            <Card style={{ marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0,shadowOffset: { height: 0, width: 0 },shadowOpacity: 0,elevation:0,borderColor:'white'}}>
                <CardItem style={{shadowOffset: { height: 0, width: 0 },shadowOpacity: 0,elevation:0,borderColor:'white'}}>
                    <Left style={{shadowOffset: { height: 0, width: 0 },shadowOpacity: 0,elevation:0,borderColor:'white'}}>
                        <Thumbnail source={require('../assets/profilresmi.jpg')} />
                        <Body>
                            <Text>Kubilay BEŞLİ</Text>
                            <Text note>10.12.2019</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height: 350, width: null, flex: 1, resizeMode: 'contain' }} />
                </CardItem>
                <CardItem style={{ height: 40 }}>
                    <Left>
                        <Button transparent>
                        <Image source={require('../assets/heart.png')}
                        style={{ width: 23, height: 23 }}
                      />
                        </Button>
                        <Button transparent>
                        <Image source={require('../assets/chat.png')}
                        style={{ width: 23, height: 23 }}
                      />
                        </Button>
                        <Button transparent>
                        <Image source={require('../assets/share.png')}
                        style={{ width: 23, height: 23 }}
                      />
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{ height: 20 }}>
                    <Text style={{ fontWeight: "900", fontSize: 13 }}>{this.props.likes} beğeni</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text style={{ fontSize: 13 }}>
                            <Text style={{ fontWeight: "900" }}>Kubilay BEŞLİ  </Text>
                          Kubilay BEŞLİ React  Native Design konusunda kendini geliştiren bir bireydir.</Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
