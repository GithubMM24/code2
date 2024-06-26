import React from 'react'
import { StatusBar } from 'react-native'
import {StyleSheet,Text,View,TextInput,TouchableOpacity} from 'react-native'

const CreateAcc = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#001737" translucent = {true}/>
            <Text style={{color:"#FFDE59",fontSize:40,fontWeight:"bold",marginBottom:10}}>Health Care</Text>
            <Text style={{color:"#CADDFF",fontSize:14, marginLeft:'15%',marginRight:'15%',marginBottom:10, textAlign:'center'}}>Enter your details to create new account</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Your Name</Text>
                <TextInput style={styles.textField} placeholder={'Enter your Name'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Your E-mail</Text>
                <TextInput style={styles.textField} placeholder={'Enter your E-mail'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Password</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'Enter your Password'} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Retype Password</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'Enter Same Password Again'} />
            </View>
            <Text style={{color:"#CADDFF",fontSize:13, marginTop:20}}>I Agreed Terms and Conditions</Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('SignIn')}>
                <Text style={styles.btnText}>Create Account</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#104003',
        justifyContent:'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        paddingTop:"2%",
        paddingBottom:"2%",
    },
    textField: {
        backgroundColor:"#CADDFF",
        padding:"4%",
        borderRadius:5,
    },
    headField: {
        marginTop:2,
        color:"#CADDFF",
        fontSize:22,
        fontWeight:"bold",
        marginBottom:10,
        marginLeft:10,
    },
    btn : {
        marginTop: 5,
        backgroundColor:'#FFDE59',
        borderRadius:5,
        width:200,
        alignItems: "center"
    },
    btnText: {
        color: "#052147",
        fontSize: 20,
        fontWeight: "bold",
        padding:10
    }
});

export default CreateAcc