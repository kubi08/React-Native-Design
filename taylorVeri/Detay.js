import React from 'react';
import { Text, View,Image,Linking } from 'react-native';
import Button from '../taylorVeri/Button';

const Detay = ({ data }) => {
    const { containerstyle,subContainerStyle,ImageStyle } = styles;

return (
    <View style={containerstyle}>


<View style={subContainerStyle}>
<Text style={{fontSize:17}}> {data.title} </Text>
</View>


<View style={subContainerStyle}>
<Image style={ImageStyle} source={{uri:data.image}}></Image>

</View>

<View style={subContainerStyle}>
<Button onPress={()=> Linking.openURL(data.url)}>SATIN AL</Button>
</View>
 
    </View>

);


};

const styles ={

    containerstyle:{

      borderWidth: 1,
      borderRadius: 2,
      borderColor:'#ddd',
      shadowColor:'#000',
      shadowOffset:{ width:0, height:2},
      shadowOpacity:0.1,
      shadowRadius:2,
      elevation:1,
      marginLeft:5,
      marginRight:5,
      marginTop:10,


    },
    subContainerStyle:{
      borderBottomWidth: 1,
      padding:5,
      backgroundColor:'#fff',
      justifyContent:'flex-start',
      flexDirection:'row',
      borderColor:'#ddd',
      position:'relative',
     


    },
    ImageStyle:{
      height:200,
      flex:1,


    }

};
export default Detay;