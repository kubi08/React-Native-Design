import React from "react";
import { View, Text, StyleSheet, TextInput, 
    TouchableOpacity,
    TouchableHighlight,
    Image,
    Alert,
    ScrollView } from "react-native";
import * as firebase from "firebase";

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        header:null
       };
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    };
    onClickListener = (viewId) => {
        Alert.alert("Alert", "Tıklandı "+viewId);
      }

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
        return (
            <View> 
           <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                source={require('../assets/profilresmi.jpg')}/>
    
                <Text style={styles.name}>
                  Not-BOSS
                </Text>
            </View>
          </View>
          <ScrollView style={styles.body}>
        <View style={styles.bodyContent}>

        <View style={styles.inputContainer}>
        <Image style={styles.inputIcon}  source={require('../assets/man.png')}/>
        <TextInput style={styles.inputs}
            placeholder="Ad Soyad"
            placeholderTextColor="#000000"
            underlineColorAndroid='transparent'
            autoCapitalize="none"
            onChangeText={name => this.setState({ name })}
            value={this.state.name}/>
      </View>
      
      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={require('../assets/at.png')}/>
        <TextInput style={styles.inputs}
            placeholder="E-posta"
            placeholderTextColor="#000000"
            underlineColorAndroid='transparent'
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}/>
            
      </View>

      
      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={require('../assets/lock.png')}/>
        <TextInput style={[ styles.inputs]}
            placeholder="Şifre"
            placeholderTextColor="#000000"
            underlineColorAndroid='transparent'
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}/>
      </View>

      <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={this.handleSignUp}>
        <Text style={styles.buttonText}>Kaydol</Text>
      </TouchableHighlight>
      {this.state.errorMessage && <Text style={styles.error}>Eksik veya yanlış bilgi girdiniz</Text>}
        </View>
    </ScrollView>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
   
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#2f2f2f",
        fontSize: 13,
        fontWeight: "300",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    header:{
        backgroundColor: "#5a5a5a",
      },
      headerContent:{
        padding:20,
        alignItems: 'center',
      },
      avatar: {
        width: 110,
        height: 110,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
      },
      name:{
        fontSize:20,
        color:"#FFFFFF",
        fontWeight:'600',
      },
      bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
      },
      textInfo:{
        fontSize:18,
        marginTop:20,
        color: "#696969",
      },
      inputContainer: {
        backgroundColor: '#fdfdfd',
        borderRadius:20,
        width:280,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
        borderColor:'#4f4f4f',
        borderWidth:1
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:25,
      height:25,
      marginLeft:20,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:280,
      borderRadius:20,
    },
    sendButton: {
      backgroundColor: "#5a5a5a",
    },
    buttonText: {
      color: 'white',
    },
});
