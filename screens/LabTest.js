// import React from 'react'
// import { StatusBar } from 'react-native'
// import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'

// const LabTest = ({navigation}) => {
//     return (
//         <View style={styles.container}>
//             <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#001737" translucent = {true}/>
//                 <View style={styles.superimages}>
//                         <Image resizeMode="stretch" source={require('../assets/labtest.png')} />
//                 </View>
//             <Text style={{color:"white",fontSize:16, textAlign:"justify", margin:"10%"}}>Feature Currently Unavailable</Text>
//             <TouchableOpacity style={styles.btn}>
//                 <Text style={styles.btnText}>Get</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#001737',
//         justifyContent:'center',
//         alignItems: 'center',
//     },
//     images: {
//         justifyContent:'center',
//         alignItems: "center",
//         flexDirection: 'row' ,
//     },
//     superimages: {
//         justifyContent:'center',
//         alignItems: "center",
//         flexDirection: 'column' ,
//     },
//     btn : {
//         marginBottom:20,
//         backgroundColor:'#FFDE59',
//         borderRadius:22,
//         width:160,
//         alignItems: "center"
//     },
//     btnText: {
//         color: "#052147",
//         fontSize: 20,
//         fontWeight: "bold",
//         padding:10
//     }
// });

// export default LabTest


import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { id: messages.length, text: message, sender: 'user' }]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.messageContainer}>
        {messages.map((msg) => (
          <View key={msg.id} style={msg.sender === 'user' ? styles.userMessage : styles.otherMessage}>
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message..."
          placeholderTextColor="#999"
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'flex-end',
  },
  messageContainer: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#5cdb95',
    maxWidth: width * 0.8,
    borderRadius: 10,
    marginVertical: 5,
    marginRight: 10,
    padding: 10,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#a0c4ff',
    maxWidth: width * 0.8,
    borderRadius: 10,
    marginVertical: 5,
    marginLeft: 10,
    padding: 10,
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 120,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
